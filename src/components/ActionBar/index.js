import React from 'react';
import cn from 'classnames';
import { Link, RouteData } from 'react-static';

const ActionBar = ({ enabled, text, buttons }) => {
  if (!enabled) return null;

  return (
    <section className="relative sm:px-0 sm:py-0 py-40">
      <div className="container mx-auto p-12 flex sm:flex-col sm:justify-center sm:items-between flex-wrap items-center shadow bg-white rounded">
        {text && <div className="flex-1 font-bold text-grey-darker">{text}</div>}

        {buttons && (
          <div className="flex-1 flex justify-end sm:justify-center sm:items-between sm:flex-wrap">
            {buttons.map((button, index) => {
              return (
                <Link
                  key={index}
                  className={cn(
                    `w-64 sm:w-full sm:mt-6 rounded-md py-3 px-6 flex justify-center select-none text-md border-2 border-${
                      button.color
                    } hover:border-${button.color}-dark focus:border-${
                      button.color
                    }-dark cursor-pointer`,
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
    </section>
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
