import React from 'react';
import cn from 'classnames';

import Link from '@components/Link';

export default ({ className, color = 'purple', outlined, href, text, onClick }) => {
  return (
    <Link
      className={cn(
        className,
        `border-${color}`,
        `hover:border-${color}-dark`,
        `focus:border-${color}-dark`,
        `px-12 font-bold sm:w-full sm:mt-6 rounded-md py-3 flex justify-center select-none border-2 cursor-pointer`,
        {
          [`bg-${color} hover:bg-${color}-dark text-white`]: !outlined,
          [`text-${color}-dark hover:text-${color}-darker`]: outlined,
        }
      )}
      to={href}
    >
      {text}
    </Link>
  );
};
