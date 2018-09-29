import React from 'react';
import { Link } from 'react-static';
import cn from 'classnames';

import { headerHeightClass } from '../Header';

export const Hero = ({ title, subtitle, rootClassName = '' }) => {
  return (
    <div className={cn(rootClassName, 'relative')}>
      <div className={cn(headerHeightClass, 'w-100')} />
      <div className="container mx-auto text-center text-white flex flex-col">
        <div className="py-8">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <div className="page-cta-wrapper">
          <a className="page-cta mr-2" href="https://next.stoplight.io">
            <i className="fa fa-rocket" />
            v3 Technical Preview
          </a>

          <a className="page-cta" href="https://app.stoplight.io/register">
            Stoplight Classic
          </a>
        </div>

        <div className="platform-blocks">
          <div className="platform-blocks-content f">
            <a
              className="platform-block background-design background-design-hover f ai-c block-one"
              href="/platform/design"
            >
              <div className="platform-block-inner">
                <div className="platform-block-title">API Designer</div>
                <div className="platform-block-description">
                  Quickly model your APIs using visual tools on top of open standards.
                </div>
                <div className="platform-block-learn">Learn More</div>
              </div>

              <div className="platform-block-triangle triangle-one" />
            </a>

            <a
              className="platform-block background-docs background-docs-hover f ai-c block-two"
              href="/platform/docs"
            >
              <div className="platform-block-inner">
                <div className="platform-block-title">Hosted Docs</div>
                <div className="platform-block-description">
                  Increase customer adoption with beautiful, functional documentation.
                </div>
                <div className="platform-block-learn">Learn More</div>
                <div className="platform-block-triangle triangle-two" />
              </div>
            </a>

            <a
              className="platform-block background-scenarios background-scenarios-hover f ai-c block-three"
              href="/platform/scenarios"
            >
              <div className="platform-block-inner">
                <div className="platform-block-title">
                  Scenarios <span className="platform-block-tag">NEW!</span>
                </div>
                <div className="platform-block-description">
                  The painless way to test, automate, and debug web APIs.
                </div>
                <div className="platform-block-learn">Learn More</div>
                <div className="platform-block-triangle triangle-three" />
              </div>
            </a>

            <a
              className="platform-block background-prism background-prism-hover f ai-c block-four"
              href="/platform/prism"
            >
              <div className="platform-block-inner">
                <div className="platform-block-title">Prism</div>
                <div className="platform-block-description">
                  Easily mock web services, and run scenarios from the command line.
                </div>
                <div className="platform-block-learn">Learn More</div>
                <div className="platform-block-triangle triangle-four" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="le-dots" />
    </div>
  );
};
