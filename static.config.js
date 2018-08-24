import React from 'react';
import fs from 'fs';
import klaw from 'klaw';
import path from 'path';
import matter from 'gray-matter';

import cssLoader from './webpack/cssLoader';
import sassLoader from './webpack/sassLoader';

const slugify = title => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

const getFiles = async srcPath => {
  const files = [];

  const pathToFiles = `./src/cms-files/${srcPath}`;

  return new Promise((resolve, reject) => {
    if (!fs.existsSync(pathToFiles)) {
      resolve(files);
      return;
    }

    klaw(pathToFiles)
      .on('data', item => {
        if (path.extname(item.path) !== '.md') {
          return;
        }

        const data = fs.readFileSync(item.path, 'utf8');
        const dataObj = matter(data);
        dataObj.data.slug = slugify(dataObj.data.title);
        delete dataObj.orig;
        files.push(dataObj);
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
    const [products, caseStudies] = await Promise.all([
      getFiles('products'),
      getFiles('case-studies'),
    ]);

    const routes = [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/pricing',
        component: 'src/containers/Pricing',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/case-studies',
        component: 'src/containers/CaseStudies',
        getData: () => ({
          caseStudies: caseStudies.map(caseStudy => {
            return {
              title: caseStudy.data.title,
              description: caseStudy.data.description,
              logo: caseStudy.data.logo,
              slug: caseStudy.data.slug,
            };
          }),
        }),
      },
      ...caseStudies.map((caseStudy, index) => {
        return {
          path: `/case-studies/${caseStudy.data.slug}`,
          component: 'src/containers/CaseStudy',
          getData: () => ({
            ...caseStudy.data,
            next: caseStudies[index + 1 >= caseStudies.length ? 0 : index + 1],
            prev: caseStudies[index - 1 <= caseStudies.length ? caseStudies.length - 1 : index - 1],
          }),
        };
      }),
    ];

    products.forEach(product => {
      routes.push({
        path: product.data.slug,
        component: 'src/containers/Product',
        getData: () => ({
          ...product,
        }),
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
            content="StopLight, providing engineering teams with the best way to document, test, and build web APIs."
          />

          <meta property="og:title" content="Stoplight" />
          <meta
            property="og:description"
            content="StopLight, providing engineering teams with the best way to document, test, and build web APIs."
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
            content="StopLight, providing engineering teams with the best way to document, test, and build web APIs."
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
