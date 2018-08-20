import React from 'react';
import { Link } from 'react-static';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';

// TODO: Add FairUseBilling
// import FairUseBilling from '@stoplight/components/src/FairUseBilling';

import { colors, sizes, Icon } from '@stoplight/ui';

class HomePage extends React.Component {
  componentDidMount() {
    // TODO: temp fix, in staging page scrolls to bottom after mount
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  render() {
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
            <h1 className="text-5xl font-normal font-medium">Simple, Flexible Pricing</h1>

            <p className="mt-10 text-xl mx-auto opacity-85 max-w-lg leading-loose">
              All of our platform plans include the entire Stoplight platform - API Modeling,
              Testing, Mocking, and basic Documentation (additional docs options below).
            </p>
          </div>
        </section>

        <section className="relative z-5" style={{ marginTop: -300 }}>
          <div className="container mx-auto items-center flex flex-wrap justify-center">
            <div className="relative z-1">
              <div className="shadow-lg rounded-lg text-grey-darker overflow-hidden">
                <div className="pricing-table">
                  <div className="pricing-table-head flex font-semibold">
                    <div className="flex-1 py-4 text-lg bg-darken-50">Open Source</div>
                    <div className="flex-1 py-4 text-lg bg-darken-100">Personal</div>
                    <div className="flex-1 py-4 text-lg bg-darken-50">Team</div>
                    <div className="flex-1 py-4 text-lg bg-darken-100">Business</div>
                  </div>

                  <div>
                    <div className="pricing-table-price flex font-bold">
                      <div className="flex-1 py-8 text-xl px-3">Free</div>
                      <div className="flex-1 py-8 text-xl px-3 bg-darken-50">$9</div>
                      <div className="flex-1 py-8 text-xl px-3">$24 per active member</div>
                      <div className="flex-1 py-8 text-xl px-3 bg-darken-50">
                        $49 per active member
                      </div>
                    </div>

                    <div className="pricing-table-price flex">
                      <div className="flex-1 py-2 px-3">Unlimited public projects</div>
                      <div className="flex-1 py-2 pb-2 px-3 bg-darken-50">
                        Unlimited public + private projects
                      </div>
                      <div className="flex-1 py-2 pb-2 px-3">
                        Unlimited public + private projects
                      </div>
                      <div className="flex-1 py-2 px-3 bg-darken-50">
                        Unlimited public + private projects
                      </div>
                    </div>

                    <div className="pricing-table-price flex">
                      <div className="flex-1 py-2 px-3">5 members</div>
                      <div className="flex-1 py-2 px-3 bg-darken-50">Just you</div>
                      <div className="flex-1 py-2 px-3">Up to 100 members</div>
                      <div className="flex-1 py-2 px-3 bg-darken-50">Unlimited members</div>
                    </div>

                    <div className="pricing-table-price flex">
                      <div className="flex-1 py-2 px-3" />
                      <div className="flex-1 py-2 px-3 bg-darken-50" />
                      <div className="flex-1 py-2 px-3" />
                      <div className="flex-1 py-2 px-3 bg-darken-50">SAML single sign-on</div>
                    </div>

                    <div className="pricing-table-price flex">
                      <div className="flex-1 pt-2 pb-8 px-3" />
                      <div className="flex-1 pt-2 pb-8 px-3 bg-darken-50" />
                      <div className="flex-1 pt-2 pb-8 px-3" />
                      <div className="flex-1 pt-2 pb-8 px-3 bg-darken-50">Dedicated Support</div>
                    </div>
                  </div>
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
          </div>

          {/* <FairUseBilling className="mt-12 mx-auto" style={{ maxWidth: 700 }} /> */}
        </section>

        <section className="relative z-5 pt-24 mt-6 mb-64">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-normal font-medium opacity-85">Documentation Plans</h2>
              <div className="mt-10 text-xl mx-auto opacity-50 max-w-lg leading-loose">
                Combine OpenAPI with Markdown to create robust documentation for internal and
                external stakeholders. One click publish to host with Stoplight or download the
                static assets to host anywhere.
              </div>
            </div>

            <div className="shadow-lg">
              <table className="hubs-table">
                <thead>
                  <tr>
                    <th />
                    <th>
                      <p className="text-accent font-bold">BASIC</p>
                      <p className="font-bold mt-2 text-lg">Free</p>
                    </th>
                    <th>
                      <p className="text-accent font-bold">Essential</p>
                      <p className="font-bold mt-2 text-lg">$69 / mo</p>
                      <p className="mt-2">1 Domain</p>
                    </th>
                    <th>
                      <p className="text-accent font-bold">Standard</p>
                      <p className="font-bold mt-2 text-lg">$159 / mo</p>
                      <p className="mt-2">10 Domains</p>
                    </th>
                    <th>
                      <p className="text-accent font-bold">Pro</p>
                      <p className="font-bold mt-2 text-lg">$349 / mo</p>
                      <p className="mt-2">Unlimited Domains</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>OpenAPI, Markdown, Request Maker</td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>
                  <tr>
                    <td>Unlimited Visits</td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>
                  <tr>
                    <td>Publish to docs.stoplight.io</td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>

                  <tr>
                    <td>Publish to your domain</td>
                    <td />
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>
                  <tr>
                    <td>Theming</td>
                    <td />
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>
                  <tr>
                    <td>Build history & instant rollbacks</td>
                    <td />
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>

                  <tr>
                    <td>Custom CSS</td>
                    <td />
                    <td />
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>
                  <tr>
                    <td>White label</td>
                    <td />
                    <td />
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>
                  <tr>
                    <td>Basic auth & Auth0 integrations</td>
                    <td />
                    <td />
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>

                  <tr>
                    <td>Download static HTML/CSS</td>
                    <td />
                    <td />
                    <td />
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>
                  <tr>
                    <td>SAML single sign-on</td>
                    <td />
                    <td />
                    <td />
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>
                  <tr>
                    <td>HTTP request OAuth token manager</td>
                    <td />
                    <td />
                    <td />
                    <td>
                      <Icon icon={faCheckCircle} color={colors.green} size={sizes.xl} />
                    </td>
                  </tr>
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
      </div>
    );
  }
}

export default HomePage;
