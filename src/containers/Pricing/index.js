import React from 'react';
import { withRouteData, Link } from 'react-static';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

import { sizes, Icon } from '@stoplight/ui';

import DocPlans from '@components/DocPlans';

const Plan = props => {
  const { title, price, unit, features, button, darken } = props;

  return (
    <div className="flex-1 flex flex-col">
      <div className={`font-semibold py-4 text-lg bg-darken-${darken ? 100 : 50}`}>{title}</div>

      <div className={`flex-grow px-3 py-8 ${darken ? 'bg-darken-50' : ''}`}>
        <div className="text-xl px-3 pb-3 h-16">
          {button ? (
            <a
              className="block mx-4 py-2 bg-blue hover:bg-blue-light font-bold text-center text-lg text-white hover:text-white transparent shadow"
              href={button.link}
              size={sizes.xl}
            >
              {button.title}
            </a>
          ) : (
            <div className="font-bold">
              {price}
              {unit && <span className="text-sm"> per member</span>}
            </div>
          )}
        </div>

        {features.map((feature, key) => (
          <div key={key} className="flex items-center justify-center py-2 font-semibold">
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

const PricingPage = ({ title, description, plans, docs }) => {
  return (
    <div>
      <section id="pricing-hero" className="flex items-center relative">
        <div className="static-gradient blue absolute z-0" aria-hidden>
          <div className="static-gradient-bg absolute" />
        </div>

        <div
          className="container mx-auto text-white relative text-center z-5"
          style={{ marginTop: -210 }}
        >
          <h1 className="text-5xl font-normal font-medium">{title}</h1>

          <div className="mt-10 text-xl mx-auto opacity-85 max-w-lg leading-loose">
            {description}
          </div>
        </div>
      </section>

      <section className="relative z-5" style={{ marginTop: -300 }}>
        <div className="mx-auto relative z-1" style={{ maxWidth: 600 }}>
          <div className="shadow-lg rounded-lg text-grey-darker overflow-hidden">
            <div className="pricing-table flex">
              {plans.map((plan, index) => (
                <Plan key={index} {...plan} darken={index === plans.length - 1} />
              ))}
            </div>

            <div>
              <Link
                to="https://next.stoplight.io/join"
                className="block py-4 bg-green hover:bg-green-light font-bold text-center text-lg text-white hover:text-white"
              >
                GET STARTED
                <Icon icon={faArrowRight} className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {docs && <DocPlans {...docs} />}
    </div>
  );
};

export default withRouteData(PricingPage);
