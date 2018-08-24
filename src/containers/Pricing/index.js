import React from 'react';
import { withRouteData, Link } from 'react-static';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';

import { colors, sizes, Icon } from '@stoplight/ui';

const Plan = props => {
  const { title, price, priceMeta, features, button, darken } = props;

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
              {priceMeta && <span className="text-sm"> per member</span>}
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

class PricingPage extends React.Component {
  render() {
    const { title, description, plans, docs } = this.props;

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
                  className="block py-4 bg-green hover:bg-green-light font-bold text-center text-lg text-white hover:text-white"
                  to="/join"
                >
                  GET STARTED
                  <Icon icon={faArrowRight} className="ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {docs && (
          <section className="relative z-5 pt-24 mt-6 mb-64">
            <div className="container mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-normal font-medium opacity-85">{docs.title}</h2>
                <div className="mt-10 text-xl mx-auto opacity-50 max-w-lg leading-loose">
                  {docs.description}
                </div>
              </div>

              <div className="shadow-lg">
                <table className="hubs-table">
                  <thead>
                    <tr>
                      <th />
                      {docs.plans &&
                        docs.plans.length > 0 &&
                        docs.plans.map((plan, index) => (
                          <th key={index}>
                            <p className="text-accent font-bold">{plan.title}</p>
                            <p className="font-bold mt-2 text-lg">{plan.price}</p>
                            {plan.domains && <p className="mt-2">{plan.domains} Domain</p>}
                          </th>
                        ))}
                    </tr>
                  </thead>

                  <tbody>
                    {docs.features &&
                      docs.features.length &&
                      docs.features.map((feature, index) => {
                        return (
                          <tr key={index}>
                            <td>{feature.title}</td>

                            {docs.plans.map((plan, index) => {
                              return (
                                <td key={index}>
                                  {feature.plans.includes(plan.title) && (
                                    <Icon
                                      icon={faCheckCircle}
                                      color={colors.green}
                                      size={sizes.xl}
                                    />
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
                    className="block py-6 bg-green hover:bg-green-light font-bold text-center text-xl text-white hover:text-white"
                    to="/join"
                  >
                    CREATE YOUR FIRST DOCS HUB
                    <Icon icon={faArrowRight} className="ml-3" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default withRouteData(PricingPage);
