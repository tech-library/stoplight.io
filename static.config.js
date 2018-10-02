import React from 'react';
import nodePath from 'path';
import fs from 'fs';
import klaw from 'klaw';
import yaml from 'js-yaml';
import chokidar from 'chokidar';
import frontmatter from 'front-matter';
import { reloadRoutes } from 'react-static/node';

import { Renderer } from './src/utils/markdown';

import webpack from './webpack';

const NETLIFY_PATH = nodePath.resolve(__dirname, 'netlify');

chokidar.watch(NETLIFY_PATH).on('all', () => reloadRoutes());

const slugify = title => {
  return title
    .toLowerCase()
    .trim()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/^\//g, '')
    .replace(/\/$/g, '');
};

const dataLoaders = {
  '.md': file => {
    const { attributes, body } = frontmatter(file);

    return {
      ...attributes,
      html: Renderer(body),
    };
  },
  '.yaml': yaml.safeLoad,
};

const getFile = (srcPath, extension = '.yaml') => {
  let data;

  try {
    data = dataLoaders[extension](fs.readFileSync(srcPath, 'utf8')) || {};
  } catch (e) {
    data = {};
    console.error('Error getFile:', srcPath, e);
  }

  const path = slugify(data.path || data.title || nodePath.basename(srcPath, 'yaml'));

  return {
    ...data,
    path: path ? `/${path}` : undefined,
  };
};

const getFiles = async (srcPath, extensions = ['.md', '.yaml']) => {
  const files = [];

  return new Promise((resolve, reject) => {
    if (!fs.existsSync(srcPath)) {
      resolve(files);
      return;
    }

    klaw(srcPath)
      .on('data', item => {
        const extension = nodePath.extname(item.path);

        if (!extensions.includes(extension)) {
          return;
        }

        files.push(getFile(item.path, extension));
      })
      .on('error', e => {
        console.error('Error getFiles:', srcPath, e);
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
    twitter: Object.assign({}, defaultMeta.twitter, meta.twitter),
  };
};

export default {
  getSiteData: () => getFile(`${NETLIFY_PATH}/settings.yaml`),

  getRoutes: async () => {
    const [
      home,
      pricing,
      about,
      caseStudyConfig,
      products,
      caseStudies,
      markdown,
    ] = await Promise.all([
      getFile(`${NETLIFY_PATH}/pages/home.yaml`),
      getFile(`${NETLIFY_PATH}/pages/pricing.yaml`),
      getFile(`${NETLIFY_PATH}/pages/about.yaml`),
      getFile(`${NETLIFY_PATH}/pages/case-studies.yaml`),

      getFiles(`${NETLIFY_PATH}/products`),
      getFiles(`${NETLIFY_PATH}/case-studies`, ['.md']),
      getFiles(`${NETLIFY_PATH}/markdown`, ['.md']),
    ]);

    const routes = [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => home,
      },
      {
        path: '/admin',
        component: 'src/containers/Admin',
        getData: () => {
          return {
            header: null,
            footer: null,
          };
        },
      },
      {
        path: pricing.path,
        component: 'src/containers/Pricing',
        getData: () => pricing,
      },
      {
        path: about.path,
        component: 'src/containers/About',
        getData: () => about,
      },
      {
        path: caseStudyConfig.path,
        component: 'src/containers/CaseStudies',
        getData: () => ({
          ...caseStudyConfig,
          caseStudies: caseStudies
            .map(caseStudy => {
              if (!caseStudy.path) return;

              const { hero = {}, info = {} } = caseStudy;

              return {
                title: info.name,
                description: hero.title,
                logo: info.logo,
                href: caseStudyConfig.path + caseStudy.path,
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
        getData: () => product,
      });
    });

    markdown.forEach(md => {
      if (!md.path) return;

      routes.push({
        path: md.path,
        component: 'src/containers/Markdown',
        getData: () => md,
      });
    });

    return routes;
  },

  Document: ({ Html, Head, Body, children, routeInfo, siteData }) => {
    const meta = resolveMeta(siteData.meta, routeInfo && routeInfo.allProps.meta);

    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.CMS_MANUAL_INIT = true;`,
            }}
          />

          {siteData.googleTagManager && (
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${siteData.googleTagManager}');`,
              }}
            />
          )}
        </Head>
        <Body>
          {siteData.googleTagManager && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${siteData.googleTagManager}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          )}

          {children}
        </Body>
      </Html>
    );
  },

  webpack,

  // bundleAnalyzer: true,
};
