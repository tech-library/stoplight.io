import React from 'react';
import cn from 'classnames';
import { withRouteData } from 'react-static';

import Hero from '@components/Hero';
import { slugify } from '@utils/text';

import '@styles/markdown.scss';
import '@styles/highlight.scss';

const Markdown = ({ color, hero, html, features = [] }) => {
  const elems = [];

  if (hero) {
    elems.push(
      <Hero
        key="hero"
        bgColor={color}
        {...hero}
        features={features.map(feature => ({
          name: feature.shortName,
          href: `#${slugify(feature.title)}`,
        }))}
      />
    );
  }

  if (html) {
    elems.push(
      <div
        key="html"
        className={cn('markdown-body container mx-auto pb-24', { 'pt-24': !hero })}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return elems;
};

export default withRouteData(Markdown);
