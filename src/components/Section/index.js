import React from 'react';
import cn from 'classnames';

const Section = ({ children, rootClassName, paddingClassName, bgClassName }) => {
  return (
    <section
      className={cn(rootClassName, 'relative md:px-0', {
        'py-40 md:py-24': !paddingClassName,
        [paddingClassName]: paddingClassName,
        'z-1': !bgClassName,
        'z-5': bgClassName,
        [bgClassName]: bgClassName,
      })}
      style={bgClassName ? { boxShadow: '0 0 5px rgba(0, 0, 0, 0.25)' } : undefined}
    >
      {children}
    </section>
  );
};

export default Section;
