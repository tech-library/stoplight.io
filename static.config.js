import React from 'react';
import nodePath from 'path';
import fs from 'fs';
import klaw from 'klaw';
import yaml from 'js-yaml';
import chokidar from 'chokidar';
import { reloadRoutes } from 'react-static/node';

import cssLoader from './webpack/cssLoader';
import sassLoader from './webpack/sassLoader';

const NETLIFY_PATH = nodePath.resolve(__dirname, 'netlify-cms');

chokidar.watch(NETLIFY_PATH).on('all', () => reloadRoutes());

const slugify = title => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/^\//g, '')
    .replace(/\/$/g, '');
};

const getFile = srcPath => {
  let data;

  try {
    data = yaml.safeLoad(fs.readFileSync(srcPath, 'utf8')) || {};
  } catch (e) {
    data = {};
    console.error(e);
  }

  const path = slugify(data.path || data.title || nodePath.basename(srcPath, 'yaml'));

  return {
    ...data,
    path: path ? `/${path}` : undefined,
  };
};

const getFiles = async srcPath => {
  const files = [];

  return new Promise((resolve, reject) => {
    if (!fs.existsSync(srcPath)) {
      resolve(files);
      return;
    }

    klaw(srcPath)
      .on('data', item => {
        if (nodePath.extname(item.path) !== '.yaml') {
          return;
        }

        files.push(getFile(item.path));
      })
      .on('error', e => {
        console.error(e);
        reject(e);
      })
      .on('end', () => {
        resolve(files);
      });
  });
};

const resolveMeta = (defaultMeta = {}, meta = {}) => {
  return {
    ...defaultMeta,
    ...meta,
    twitter: {
      ...defaultMeta.twitter,
      ...meta.twitter,
    },
  };
};

export default {
  getSiteData: async () => {
    const headerProps = await getFile(`${NETLIFY_PATH}/other/header.yaml`);
    const footerProps = await getFile(`${NETLIFY_PATH}/other/footer.yaml`);

    return {
      headerProps,
      footerProps,
    };
  },

  getRoutes: async () => {
    const [home, pricing, about, products, caseStudies] = await Promise.all([
      getFile(`${NETLIFY_PATH}/home.yaml`),
      getFile(`${NETLIFY_PATH}/pricing.yaml`),
      getFile(`${NETLIFY_PATH}/about.yaml`),

      getFiles(`${NETLIFY_PATH}/products`),
      getFiles(`${NETLIFY_PATH}/case-studies`),
    ]);

    const defaultMeta = home.meta;

    const routes = [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => home,
      },
      {
        path: pricing.path,
        component: 'src/containers/Pricing',
        getData: () => ({
          ...pricing,
          meta: resolveMeta(defaultMeta, pricing.meta),
        }),
      },
      {
        path: about.path,
        component: 'src/containers/About',
        getData: () => ({
          ...about,
          meta: resolveMeta(defaultMeta, about.meta),
        }),
      },
      {
        path: '/case-studies',
        component: 'src/containers/CaseStudies',
        getData: () => ({
          caseStudies: caseStudies
            .map(caseStudy => {
              if (!caseStudy.path) return;
              return {
                title: caseStudy.title,
                description: caseStudy.description,
                logo: caseStudy.logo,
                path: caseStudy.path,
                meta: resolveMeta(defaultMeta, caseStudy.meta),
              };
            })
            .filter(Boolean),
        }),
        children: caseStudies
          .map((caseStudy, index) => {
            if (!caseStudy.path) return;
            return {
              path: caseStudy.path,
              component: 'src/containers/CaseStudy',
              getData: () => ({
                ...caseStudy,
                meta: resolveMeta(defaultMeta, caseStudy.meta),
                next: caseStudies[index + 1 >= caseStudies.length ? 0 : index + 1],
                prev:
                  caseStudies[index - 1 <= caseStudies.length ? caseStudies.length - 1 : index - 1],
              }),
            };
          })
          .filter(Boolean),
      },
    ];

    products.forEach(product => {
      if (!product.path) return;

      routes.push({
        path: product.path,
        component: 'src/containers/Product',
        getData: () => ({
          ...product,
          meta: resolveMeta(defaultMeta, product.meta),
        }),
      });
    });

    return routes;
  },

  Document: ({ Html, Head, Body, children, routeInfo }) => {
    const meta = (routeInfo && routeInfo.allProps.meta) || { twitter: {} };

    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />

          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:url" content={meta.url} />
          <meta property="og:site_name" content={meta.siteName} />
          <meta property="og:image" content={meta.image} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={meta.twitter.username} />
          <meta name="twitter:creator" content={meta.twitter.username} />
          <meta name="twitter:title" content={meta.twitter.title} />
          <meta name="twitter:description" content={meta.twitter.description} />
          <meta name="twitter:image" content={meta.twitter.image} />

          <link rel="shortcut icon" href={meta.favicon} type="image/x-icon" />
        </Head>
        <Body>{children}</Body>
      </Html>
    );
  },

  webpack: (config, { stage, defaultLoaders }) => {
    config.module.rules = [
      {
        oneOf: [
          defaultLoaders.jsLoader,
          sassLoader(stage),
          cssLoader(stage),
          defaultLoaders.fileLoader,
        ],
      },
    ];

    config.resolve.alias = {
      '@components': nodePath.resolve(__dirname, 'src/components'),
      '@styles': nodePath.resolve(__dirname, 'src/styles'),
      '@utils': nodePath.resolve(__dirname, 'src/utils'),
    };

    return config;
  },
};
