import React from 'react';
import { Link } from 'react-static';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';

import { colors, sizes, Icon } from '@stoplight/ui';

const DocPlans = ({ title, description, features, plans, buttonUrl, buttonText }) => {
  return (
    <section className="relative z-5 pt-24 mt-6 mb-64">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="text-4xl font-bold">{title}</div>
          <div className="mt-10 text-xl mx-auto opacity-50 max-w-lg leading-loose">
            {description}
          </div>
        </div>

        <div className="shadow-lg">
          <table className="hubs-table bg-white">
            <thead>
              <tr>
                <th />
                {plans &&
                  plans.length > 0 &&
                  plans.map((plan, index) => (
                    <th key={index}>
                      <p className="text-accent font-bold">{plan.title}</p>
                      <p className="font-bold mt-2 text-lg">{plan.price}</p>
                      {plan.domains && <p className="mt-2">{plan.domains} Domain</p>}
                    </th>
                  ))}
              </tr>
            </thead>

            <tbody>
              {features &&
                features.length &&
                features.map((feature, index) => {
                  return (
                    <tr key={index}>
                      <td>{feature.title}</td>

                      {plans.map((plan, index) => {
                        return (
                          <td key={index}>
                            {feature.plans.includes(plan.title) && (
                              <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <div>
            <Link
              to={buttonUrl}
              title={buttonText}
              className="block py-6 bg-green hover:bg-green-light font-bold text-center text-xl text-white hover:text-white"
            >
              {buttonText}
              <Icon icon={faArrowRight} className="ml-3" />
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center opacity-75">
          *all plans include the free version of the core platform
        </div>
      </div>
    </section>
  );
};

export default DocPlans;
