import MarkdownIt from 'markdown-it';
import MarkdownItVideo from 'markdown-it-video';
import MarkdownItTaskCheckbox from 'markdown-it-task-checkbox';

import Highlight from './highlight';

const escapeHtml = unsafe => {
  if (typeof unsafe !== 'string') {
    return '';
  }

  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const BaseMarkdown = new MarkdownIt({
  html: true,
  linkify: false,
  typographer: true,
  highlight: (str, lang) => {
    try {
      const grammar =
        lang !== undefined
          ? Highlight.languages[lang] || Highlight.languages.markup
          : Highlight.languages.markup;
      return Highlight.highlight(str, grammar, lang);
    } catch (e) {
      console.warn('error highlighting code', str, lang, e);
      return str;
    }
  },
})
  .use(MarkdownItVideo)
  .use(MarkdownItTaskCheckbox, {
    disabled: true,
    divWrap: false,
    divClass: 'checkbox',
    idPrefix: 'cbx_',
    ulClass: 'task-list',
    liClass: 'task-list-item',
  });

/**
 * LINKS
 *
 * 1. Makes absolute links target="_blank"
 * 2. Supports prefixing with a custom basePath + relativePath
 */

const defaultLinkRender =
  BaseMarkdown.renderer.rules.link_open ||
  function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

BaseMarkdown.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const { basePath, relativePath, query } = env;

  const link = tokens[idx];

  // Sanitize title if exists
  const titleIndex = link.attrIndex('title');
  if (titleIndex >= 0) {
    link.attrs[titleIndex][1] = escapeHtml(link.attrs[titleIndex][1]);
  }

  // escape and compute the href
  let isAbsolute = false;
  const hrefIndex = link.attrIndex('href');
  if (hrefIndex >= 0) {
    let href = escapeHtml(link.attrs[hrefIndex][1]);
    isAbsolute = href.charAt(0) !== '/' && href.charAt(0) !== '#';

    if (!isAbsolute && basePath && basePath !== '/') {
      if (href.charAt(0) !== '#') {
        href = basePath + href;
      } else {
        href = basePath + relativePath + href;
      }
    }
    link.attrs[hrefIndex][1] = href;
  }

  // Add target=_blank to external links
  if (isAbsolute) {
    const targetIndex = link.attrIndex('target');
    if (targetIndex < 0) {
      link.attrPush(['target', '_blank']); // add new attribute
    } else {
      link.attrs[targetIndex][1] = '_blank'; // replace value of existing attr
    }
  }

  // pass token to default renderer.
  tokens[idx] = link;
  return defaultLinkRender(tokens, idx, options, env, self);
};

/**
 * No frills renderer.
 *
 * @param {String} src
 */
export const InlineRenderer = src => {
  return BaseMarkdown.renderInline(src);
};

/**
 * Core markdown renderer that supports all of our custom elements.
 *
 * @param {String} src
 * @param {*} options
 * @param {*} env
 */
export const Renderer = (src, options = {}, env = {}) => {
  if (!src) {
    return null;
  } else if (typeof src !== 'string') {
    console.warn('Markdown: you must use a string when rendering markdown.', { src, options, env });
    return null;
  }

  try {
    return BaseMarkdown.renderer.render(
      BaseMarkdown.parse(src, env),
      Object.assign(BaseMarkdown.options, options),
      env
    );
  } catch (e) {
    console.error('error rendering', e, { src, options, env });
  }

  return null;
};
