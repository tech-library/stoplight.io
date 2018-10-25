import React from 'react';
import { Link } from 'react-static';

const stoplightNext = /next\.stoplight\.io/;

// Make sure there aren't any trailing white spaces
export default ({ to, children, ...props }) => {
  let href = to;

  if (typeof href === 'string') {
    href = href.trim();

    if (href.startsWith('#')) {
      return (
        <a {...props} href={href}>
          {children}
        </a>
      );
    } else if (typeof localStorage !== 'undefined' && stoplightNext.test(href)) {
      href += localStorage.getItem('utm') || '';
    }
  }

  return (
    <Link {...props} to={href}>
      {children}
    </Link>
  );
};
