import React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import { Link } from 'react-static';

import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons/faPuzzlePiece';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faServer } from '@fortawesome/free-solid-svg-icons/faServer';
import { faFlask } from '@fortawesome/free-solid-svg-icons/faFlask';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

// TODO: Add a Modal component
// import Modal from '@stoplight/components/src/Modal';
import { colors, sizes, Button, Icon } from '@stoplight/ui';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      featuresTab: 'design-editor',
    };
  }

  componentDidMount() {
    // TODO: temp fix, in staging page scrolls to bottom after mount
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  renderFeaturesTabs() {
    const tabs = [
      {
        id: 'design-editor',
        name: 'API Designer',
        icon: faPuzzlePiece,
      },
      {
        id: 'hosted-docs',
        name: 'Technical Docs',
        icon: faBook,
      },
      {
        id: 'api-mocking',
        name: 'API Mocking',
        icon: faServer,
      },
      {
        id: 'api-contract-testing',
        name: 'API Contract Testing',
        icon: faFlask,
      },
    ];

    return (
      <ul className="list-reset">
        {_.map(tabs, (tab, index) => {
          const isActive = tab.id === this.state.featuresTab;

          return (
            <li
              key={index}
              className={cn('flex items-center cursor-pointer', {
                'text-accent-dark': isActive,
                'hover:opacity-85': !isActive,
                'mt-20': index !== 0,
              })}
              onClick={() => this.setState({ featuresTab: tab.id })}
            >
              <div
                className={cn(
                  'rounded-full h-16 w-16 flex items-center justify-center text-white mr-8',
                  {
                    'bg-grey-darkest': !isActive,
                    'bg-accent-dark': isActive,
                  }
                )}
              >
                <Icon icon={tab.icon} size={sizes.xl} />
              </div>
              <div className="text-2xl font-bold leading-loose">{tab.name}</div>
            </li>
          );
        })}
      </ul>
    );
  }

  renderFeatures() {
    switch (this.state.featuresTab) {
      case 'design-editor':
        return (
          <div>
            <img
              className="w-full shadow-lg rounded-xl"
              src="/images/editors/design_editor.png"
              alt=""
            />
            <p className="mt-12 text-2xl">
              With the Stoplight visual designer, you don't need to be an OpenAPI Specification
              expert. Involve everybody in the design process and manage your specifications 10x
              faster.
            </p>

            <p className="mt-8 text-xl text-right">
              <a
                href="http://docs.stoplight.io/modeling/introduction"
                className="text-grey-darkest border-b-2 border-accent-dark pb-2 font-bold text-lg hover:border-transparent hover:text-grey-dark"
              >
                Learn more about the Designer
              </a>
            </p>
          </div>
        );
      case 'hosted-docs':
        return (
          <div>
            <img
              className="w-full shadow-lg rounded-xl"
              src="/images/editors/hosted_docs.png"
              alt=""
            />

            <p className="mt-12 text-2xl">
              Stoplight’s hosted documentation product supports custom domains, embedded docs,
              analytics integrations, custom themes, multiple layouts, and much more.
            </p>

            <p className="mt-8 text-xl text-right">
              <a
                href="http://docs.stoplight.io/documentation/introduction"
                className="text-grey-darkest border-b-2 border-accent-dark pb-2 font-bold text-lg hover:border-transparent hover:text-grey-dark"
              >
                Learn more about Hosted Docs
              </a>
            </p>
          </div>
        );
      case 'api-mocking':
        return (
          <div>
            <img
              className="w-full shadow-lg rounded-xl"
              src="/images/editors/mock_server.png"
              alt=""
            />

            <p className="mt-12 text-2xl">
              Turn your OpenAPI specifications into instant mock servers to allow your frontend and
              backend teams to work in parallel.
            </p>

            <p className="mt-8 text-xl text-right">
              <a
                href="http://docs.stoplight.io/mocking/introduction"
                className="text-grey-darkest border-b-2 border-accent-dark pb-2 font-bold text-lg hover:border-transparent hover:text-grey-dark"
              >
                Learn more about API Mocking
              </a>
            </p>
          </div>
        );
      case 'api-contract-testing':
        return (
          <div>
            <img
              className="w-full shadow-lg rounded-xl"
              src="/images/editors/contract_testing.png"
              alt=""
            />

            <p className="mt-12 text-2xl">
              Run test scenarios directly from your terminal, with a single command. Integrates
              easily into your existing continuous integration process.
            </p>

            <p className="mt-8 text-xl text-right">
              <a
                href="http://docs.stoplight.io/testing/introduction"
                className="text-grey-darkest border-b-2 border-accent-dark pb-2 font-bold text-lg hover:border-transparent hover:text-grey-dark"
              >
                Learn more about API Contract Testing
              </a>
            </p>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <header className="relative">
          <div className="static-gradient purple absolute z-0" aria-hidden>
            <div className="static-gradient-bg absolute" />
          </div>

          <section id="hero" className="relative z-5 flex items-center">
            <div className="container mx-auto text-white relative -mt-10">
              <h1 className="text-5xl max-w-xl font-normal font-medium">
                Best in class API Design, Docs, Mocking, and Testing
              </h1>

              <p className="mt-10 text-xl opacity-85 max-w-md leading-loose">
                Stoplight leverages your OpenAPI files to drive the entire API development process.
              </p>

              <div className="flex mt-20">
                <div className="flex flex-1 items-center">
                  <Button
                    color={colors.green}
                    size={sizes.xl}
                    shadow
                    // onClick={
                    // () =>
                    // TODO: Implement GitHub login

                    // userService.openOAuthPopup('github', () => {
                    //   const { username, role } = userService.authorizedUser || {};

                    //   alert.success(`Welcome ${username}! Re-directing...`);

                    //   let redirect = '/';
                    //   if (!role && !isOnPrem()) {
                    //     redirect = '/?modal=onboard';
                    //   }

                    //   window.location.href = redirect;
                    // })
                    // }
                  >
                    <Icon icon={faGithub} className="mr-2" /> Start with GitHub
                  </Button>

                  <div className="text-white font-bold text-lg ml-6">OR</div>

                  <Link href="/join">
                    <Button
                      size={sizes.xl}
                      customTheme="ml-6 text-white hover:bg-lighten-200"
                      shadow
                      transparent
                    >
                      Email
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </header>

        <section id="pitch" className="relative z-1 flex items-center mt-4">
          <div className="container mx-auto text-right">
            <div className="w-3/5 md:w-full lg:w-full">
              <h2 className="text-3xl max-w-xl font-bold text-secondary">
                The Complete API Toolkit
              </h2>

              <div className="mt-10">
                <div className="flex items-center justify-end py-4">
                  <div className="flex-1">
                    <div className="text-xl font-medium">Visual OpenAPI (Swagger) Designer</div>
                    <div className="opacity-85 mt-1/2ml-a">
                      Create specs{' '}
                      {/* <Modal
                        key="a"
                        className="compare-modal"
                        size="large"
                        triggerFactory={({ handleOpen }) => {
                          return (
                            <div
                              className="cur-p hover:text-blue border-b border-dotted border-black inline"
                              onClick={handleOpen}
                            >
                              10x faster
                            </div>
                          );
                        }}
                        contentFactory={() => (
                          <div className="text-center">
                            <iframe
                              title="vimeo"
                              src="https://player.vimeo.com/video/246858062?autoplay=1&byline=0&portrait=0"
                              width="1100"
                              height="619"
                              frameBorder="0"
                              webkitallowfullscreen
                              mozallowfullscreen
                              allowFullScreen
                            />
                          </div>
                        )}
                      /> */}
                      , no specialized knowledge required.
                    </div>
                  </div>
                  <div className="text-green ml-6 mr-2 text-2xl">
                    <Icon icon={faCheck} />
                  </div>
                </div>

                <div className="flex items-center justify-end py-4">
                  <div className="flex-1">
                    <div className="text-xl font-medium">Instant Documentation</div>
                    <div className="opacity-85 mt-1/2 ml-a">
                      Combine OpenAPI files with Markdown to create beautiful documentation for
                      internal and external stakeholders.
                    </div>
                  </div>
                  <div className="text-green ml-6 mr-2 text-2xl">
                    <Icon icon={faCheck} />
                  </div>
                </div>

                <div className="flex items-center justify-end py-4">
                  <div className="flex-1">
                    <div className="text-xl font-medium">One Click Mock Servers</div>
                    <div className="opacity-85 mt-1/2 ml-a">
                      Instantly turn any OpenAPI file into a mock server.
                    </div>
                  </div>
                  <div className="text-green ml-6 mr-2 text-2xl">
                    <Icon icon={faCheck} />
                  </div>
                </div>

                <div className="flex items-center justify-end py-4">
                  <div className="flex-1">
                    <div className="text-xl font-medium">Contract Testing</div>
                    <div className="opacity-85 mt-1/2 w-3/5 ml-a">
                      Ensure your single source of truth (OpenAPI) accurately reflects your API.
                    </div>
                  </div>
                  <div className="text-green ml-6 mr-2 text-2xl">
                    <Icon icon={faCheck} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="product-img" className="md:hidden">
            <img src="/images/home-hero.png" alt="" />
          </div>
        </section>

        <section className="relative z-5">
          <div id="section-gradient" className="absolute z-0" aria-hidden />

          <section id="customers" className="relative z-5 flex items-center">
            <div className="container mx-auto">
              <h2 className="text-center text-3xl mb-8 opacity-85">
                Thousands of customers use Stoplight to streamline
                <br />
                their API &amp; Microservice workflow
              </h2>

              <div className="flex content-start flex-wrap items-center">
                <div className="w-1/4 p-4 text-center">
                  <img className="w-4/5" src="/images/customer_logos/shopgate.png" alt="" />
                </div>
                <div className="w-1/4 p-4 text-center">
                  <img className="w-4/5" src="/images/customer_logos/ea.png" alt="" />
                </div>
                <div className="w-1/4 p-4 mt-4 text-center">
                  <img className="w-4/5" src="/images/customer_logos/tivo.png" alt="" />
                </div>
                <div className="w-1/4 p-4 text-center">
                  <img className="w-full" src="/images/customer_logos/quicken.png" alt="" />
                </div>
                <div className="w-1/4 p-4 mt-4 text-center">
                  <img className="w-4/5" src="/images/customer_logos/sendgrid.png" alt="" />
                </div>
                <div className="w-1/4 p-4 mt-4 text-center">
                  <img className="w-4/5" src="/images/customer_logos/spotify.png" alt="" />
                </div>
                <div className="w-1/4 p-4 mt-4 text-center">
                  <img className="w-4/5" src="/images/customer_logos/chargify.png" alt="" />
                </div>
                <div className="w-1/4 p-4 mt-4 text-center">
                  <img className="w-4/5" src="/images/customer_logos/zendesk.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="page-section py-48 relative z-5">
          <div className="container mx-auto">
            <h2 className="text-center text-3xl mb-24 opacity-85">Key Features</h2>

            <div className="flex">
              <div className="flex-0 w-96 mr-12">{this.renderFeaturesTabs()}</div>
              <div className="flex-1">{this.renderFeatures()}</div>
            </div>
          </div>
        </section>

        <section id="testimonial" className="mt-48 pb-16 pt-16 relative">
          <div className="static-gradient purple absolute z-0" aria-hidden />

          <div className="container mx-auto relative z-5 flex flex-wrap items-center">
            <div className="w-1/2 pr-10 pb-10">
              <div className="testimonial-card max-w-lg w-full lg:flex shadow-lg mx-auto items-stretch bg-white">
                <div className="w-1/5 flex flex-col justify-center">
                  <div
                    className="-ml-14 rounded-full bg-cover shadow-sm border-grey border"
                    style={{
                      backgroundImage: 'url(/images/testimonials/kin_lane.jpeg)',
                      height: '150px',
                      width: '150px',
                    }}
                    alt=""
                  />
                </div>

                <div className="p-8 flex flex-col w-4/5 justify-center leading-normal">
                  <p className="text-grey-darker leading-loose">
                    “I feel like Stoplight has the potential to shift the landscape pretty
                    significantly, something I haven't seen any API service provider do in a while.”
                  </p>

                  <p className="font-bold mt-4">Kin Lane, API Evangelist</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 pl-10 pb-10">
              <div className="testimonial-card max-w-lg w-full lg:flex shadow-lg mx-auto items-stretch bg-white">
                <div className="w-1/5 flex flex-col justify-center">
                  <div
                    className="-ml-14 rounded-full bg-cover shadow-sm"
                    style={{
                      backgroundImage: 'url(/images/testimonials/bruce_wang.jpeg)',
                      height: '150px',
                      width: '150px',
                    }}
                    alt=""
                  />
                </div>

                <div className="p-8 flex flex-col w-4/5 justify-center leading-normal">
                  <p className="text-grey-darker leading-loose">
                    "Stoplight allows for better public API docs and internal microservice API
                    discovery / management."
                  </p>

                  <p className="font-bold mt-4">Bruce Wang, Synq.fm, CTO</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 pr-10 pt-10">
              <div className="testimonial-card max-w-lg w-full lg:flex shadow-lg mx-auto items-stretch bg-white">
                <div className="w-1/5 flex flex-col justify-center">
                  <div
                    className="-ml-14 rounded-full bg-cover shadow-sm"
                    style={{
                      backgroundImage: 'url(/images/testimonials/john_vajda.jpeg)',
                      height: '150px',
                      width: '150px',
                    }}
                    alt=""
                  />
                </div>

                <div className="p-8 flex flex-col w-4/5 justify-center leading-normal">
                  <p className="text-grey-darker leading-loose">
                    “Stoplight has been a serious game changer for JumpCloud's API development! We
                    love all the rich design, documentation and testing features, which has enabled
                    us to design awesome APIs for our customers.”
                  </p>

                  <p className="font-bold mt-4">John Vajda, Product Manager, JumpCloud</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 pl-10 pt-10">
              <div className="testimonial-card max-w-lg w-full lg:flex shadow-lg mx-auto items-stretch bg-white">
                <div className="w-1/5 flex flex-col justify-center">
                  <div
                    className="-ml-14 rounded-full bg-cover shadow-sm"
                    style={{
                      backgroundImage: 'url(/images/testimonials/gil.jpeg)',
                      height: '150px',
                      width: '150px',
                    }}
                    alt=""
                  />
                </div>

                <div className="p-8 flex flex-col w-4/5 justify-center leading-normal">
                  <p className="text-grey-darker leading-loose">
                    "Stoplight provides a centralized, testable and reliable source for our APIs."
                  </p>

                  <p className="font-bold mt-4">Gil Barbara, AMARO, Frontend engineer</p>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-40 mb-12 w-full">
              <div className="flex-1 text-center">
                <Link href="/join">
                  <Button color={colors.accent} size={sizes.xl} shadow className="w-full max-w-xs">
                    Get Started
                  </Button>
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
