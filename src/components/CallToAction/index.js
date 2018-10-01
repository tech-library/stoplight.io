import React from 'react';
import { Link } from 'react-static';
import cn from 'classnames';

import { colors, sizes, Button } from '@stoplight/ui';

const CallToAction = ({
  name,
  color,
  size,
  className,
  shadow = true,
  href = 'https://next.stoplight.io/join',
}) => {
  if (!name) return null;

  const cta = (
    <Button
      color={colors[color] || colors.purple}
      size={sizes[size] || sizes.lg}
      className={cn('rounded', {
        'shadow-md': shadow,
      })}
    >
      {name}
    </Button>
  );

  return (
    <div className={cn(className)}>
      {href.startsWith('/') ? <Link to={href}>{cta}</Link> : <a href={href}>{cta}</a>}
    </div>
  );
};

export default CallToAction;
