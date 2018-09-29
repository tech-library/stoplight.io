import React from 'react';
import fs from 'fs';
import klaw from 'klaw';
import path from 'path';
import yaml from 'js-yaml';
import chokidar from 'chokidar';
import { reloadRoutes } from 'react-static/node';

import cssLoader from './webpack/cssLoader';
import sassLoader from './webpack/sassLoader';

const NETLIFY_PATH = './netlify-cms';

chokidar.watch(NETLIFY_PATH).on('all', () => reloadRoutes());

const slugify = title => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

const getFile = srcPath => {
  let data;

  try {
    data = yaml.safeLoad(fs.readFileSync(srcPath, 'utf8'));
  } catch (e) {
    console.error(e);
  }

  return {
    slug: slugify(data.title || path.basename(srcPath, 'yaml')),
    ...data,
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
        if (path.extname(item.path) !== '.yaml') {
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

export default {
  getRoutes: async () => {
    const [home, pricing, about, products, caseStudies] = await Promise.all([
      getFile(`${NETLIFY_PATH}/home.yaml`),
      getFile(`${NETLIFY_PATH}/pricing.yaml`),
      getFile(`${NETLIFY_PATH}/about.yaml`),

      getFiles(`${NETLIFY_PATH}/products`),
      getFiles(`${NETLIFY_PATH}/case-studies`),
    ]);

    const routes = [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => home,
      },
      {
        path: '/pricing',
        component: 'src/containers/Pricing',
        getData: () => pricing,
      },
      {
        path: '/about',
        component: 'src/containers/About',
        getData: () => about,
      },
      {
        path: '/case-studies',
        component: 'src/containers/CaseStudies',
        getData: () => ({
          caseStudies: caseStudies.map(caseStudy => {
            return {
              title: caseStudy.title,
              description: caseStudy.description,
              logo: caseStudy.logo,
              slug: caseStudy.slug,
            };
          }),
        }),
        children: caseStudies.map((caseStudy, index) => {
          return {
            path: `/${caseStudy.slug}`,
            component: 'src/containers/CaseStudy',
            getData: () => ({
              ...caseStudy,
              next: caseStudies[index + 1 >= caseStudies.length ? 0 : index + 1],
              prev:
                caseStudies[index - 1 <= caseStudies.length ? caseStudies.length - 1 : index - 1],
            }),
          };
        }),
      },
    ];

    products.forEach(product => {
      routes.push({
        path: product.slug,
        component: 'src/containers/Product',
        getData: () => product,
      });
    });

    return routes;
  },

  Document: ({ Html, Head, Body, children }) => {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Stoplight</title>
          <meta
            name="description"
            content="Stoplight, providing engineering teams with the best way to document, test, and build web APIs."
          />

          <meta property="og:title" content="Stoplight" />
          <meta
            property="og:description"
            content="Stoplight, providing engineering teams with the best way to document, test, and build web APIs."
          />
          <meta property="og:url" content="https://stoplight.io" />
          <meta property="og:site_name" content="Stoplight" />
          <meta property="og:image" content="/images/home-hero.png" />

          <meta name="twitter:title" content="Hosted Docs" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@stoplight" />
          <meta name="twitter:creator" content="@stoplight" />
          <meta
            name="twitter:description"
            content="Stoplight, providing engineering teams with the best way to document, test, and build web APIs."
          />
          <meta name="twitter:image" content="/images/home-hero.png" />

          <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
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
    return config;
  },
};
