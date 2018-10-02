import React from 'react';
import cn from 'classnames';
import { Link, RouteData } from 'react-static';

const ActionBar = ({ enabled, text, buttons, className }) => {
  if (!enabled) return null;

  return (
    <div
      className={cn(
        className,
        'container mx-auto p-12 flex sm:flex-col sm:justify-center sm:items-between flex-wrap items-center shadow rounded'
      )}
    >
      {text && <div className="flex-1 font-bold text-grey-darker">{text}</div>}

      {buttons && (
        <div className="flex-1 flex justify-end sm:justify-center sm:items-between sm:flex-wrap">
          {buttons.map((button, index) => {
            return (
              <Link
                key={index}
                className={cn(
                  `border-${button.color}`,
                  `hover:border-${button.color}-dark`,
                  `focus:border-${button.color}-dark`,
                  `px-12 font-bold sm:w-full sm:mt-6 rounded-md py-3 flex justify-center select-none border-2 cursor-pointer`,
                  {
                    'ml-4 sm:ml-0': index > 0,
                    [`bg-${button.color} hover:bg-${
                      button.color
                    }-dark text-white`]: !button.outlined,
                    [`text-${button.color}-dark hover:text-${
                      button.color
                    }-darker`]: button.outlined,
                  }
                )}
                to={button.href}
              >
                {button.text}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default props => {
  return (
    <RouteData
      render={({ actionBar }) => {
        return <ActionBar {...Object.assign({}, props, actionBar)} />;
      }}
    />
  );
};
