import React from 'react';
import { withRouteData } from 'react-static';

import Hero from '@components/Hero';

import '@styles/markdown.scss';
import '@styles/highlight.scss';

const Markdown = ({ hero, body }) => {
  const elems = [];

  if (hero) {
    elems.push(<Hero key="hero" {...hero} />);
  }

  if (body) {
    elems.push(
      <div
        key="body"
        className="markdown-body container mx-auto py-24"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    );
  }

  return elems;
};

export default withRouteData(Markdown);
