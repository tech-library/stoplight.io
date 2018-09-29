import React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import { withRouteData, Link } from 'react-static';

import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

import { colors, sizes, Button, Icon } from '@stoplight/ui';

import { Hero } from '../../components/Hero';

const Feature = ({ title, description }, key) => {
  return (
    <div key={key} className="flex items-center justify-end py-4">
      <div className="flex-1">
        <div className="text-xl font-medium">{title}</div>
        <div className="opacity-85 mt-1/2 ml-auto">{description}</div>
      </div>
      <div className="text-green ml-6 mr-2 text-2xl">
        <Icon icon={faCheck} />
      </div>
    </div>
  );
};

const Testimonial = ({ image, quote, author, company, role }, key) => {
  return (
    <div key={key} className="w-1/2 pr-10 pb-10">
      <div className="testimonial-card max-w-lg w-full lg:flex shadow-lg mx-auto items-stretch bg-white">
        <div className="w-1/5 flex flex-col justify-center">
          <div
            className="-ml-14 rounded-full bg-cover shadow-sm border-grey border"
            style={{
              backgroundImage: `url(${image})`,
              height: '150px',
              width: '150px',
            }}
            alt={author}
          />
        </div>

        <div className="p-8 flex flex-col w-4/5 justify-center leading-normal">
          <p className="text-grey-darker leading-loose">{quote}</p>

          <p className="font-bold mt-4">
            {author}
            {company && `, ${company}`}
            {role && `, ${role}`}
          </p>
        </div>
      </div>
    </div>
  );
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productTab: props.products[0].title,
    };
  }

  renderProductTabs() {
    const { products } = this.props;
    const { productTab } = this.state;

    return (
      <ul className="list-reset">
        {_.map(products, (product, index) => {
          const isActive = product.title === productTab;

          return (
            <li
              key={index}
              className={cn('flex items-center cursor-pointer', {
                'text-accent-dark': isActive,
                'hover:opacity-85': !isActive,
                'mt-20': index !== 0,
              })}
              onClick={() => this.setState({ productTab: product.title })}
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
                <Icon icon={faCheck} size={sizes.xl} />
              </div>
              <div className="text-2xl font-bold leading-loose">{product.title}</div>
            </li>
          );
        })}
      </ul>
    );
  }

  renderProduct() {
    const { products } = this.props;
    const { image, link, description, title } = products.find(
      product => product.title === this.state.productTab
    );

    return (
      <div>
        <img className="w-full shadow-lg rounded-xl" src={image} alt="" />
        <p className="mt-12 text-2xl">{description}</p>

        <p className="mt-8 text-xl text-right">
          <a
            href={link}
            className="text-grey-darkest border-b-2 border-accent-dark pb-2 font-bold text-lg hover:border-transparent hover:text-grey-dark"
          >
            Learn more about the {title}
          </a>
        </p>
      </div>
    );
  }

  render() {
    const { heading, description, platform, customers, testimonials } = this.props;

    return [
      <Hero
        key="1"
        title={heading}
        subtitle={description}
        rootClassName="bg-black"
        cards={[
          {
            index: 'one',
            title: 'Visual OpenAPI',
            subtitle: 'Use our visual designer to manage OpenAPI (Swagger) 10x faster.',
            href: '/openapi-design',
            color: 'blue',
          },
          {
            index: 'two',
            title: 'Technical Docs',
            subtitle: 'Increase customer adoption with beautiful, functional documentation.',
            href: '/openapi-documentation',
            color: 'green',
          },
          {
            index: 'three',
            title: 'Contract Testing',
            subtitle: 'Leverage OpenAPI to test, automate, and debug web APIs.',
            href: '/openapi-testing',
            color: 'orange',
          },
          {
            index: 'four',
            title: 'Mocking',
            subtitle: 'Parallelize development with one click mock servers, powered by OpenAPI.',
            href: '/platform/design',
            color: 'grey-darkest',
          },
        ]}
      />,
    ];

    return (
      <div>
        <header className="relative">
          <div className="static-gradient purple absolute z-0" aria-hidden>
            <div className="static-gradient-bg absolute" />
          </div>

          <section id="hero" className="relative z-5 flex items-center">
            <div className="container mx-auto text-white relative -mt-10">
              <h1 className="text-5xl max-w-xl font-normal font-medium">{heading}</h1>

              <p className="mt-10 text-xl opacity-85 max-w-md leading-loose">{description}</p>

              <div className="flex mt-20">
                <div className="flex flex-1 items-center">
                  <Link href="/join">
                    <Button color={colors.green} size={sizes.xl} shadow>
                      <Icon icon={faGithub} className="mr-2" /> Start with GitHub
                    </Button>
                  </Link>

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

        {platform && (
          <section id="pitch" className="relative z-1 flex items-center mt-4">
            <div className="container mx-auto text-right">
              <div className="w-3/5 md:w-full lg:w-full">
                <h2 className="text-3xl max-w-xl font-bold text-secondary">{platform.title}</h2>

                {platform.features &&
                  platform.features.length > 0 && (
                    <div className="mt-10">{platform.features.map(Feature)}</div>
                  )}
              </div>
            </div>

            <div id="product-img" className="md:hidden">
              <img src={platform.image} alt="" />
            </div>
          </section>
        )}

        {customers &&
          customers.length > 0 && (
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
                    {customers.map((customer, key) => {
                      return (
                        <div key={key} className="w-1/4 p-4 text-center">
                          <img className="w-4/5" src={customer} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </section>
          )}

        <section className="page-section py-48 relative z-5">
          <div className="container mx-auto">
            <h2 className="text-center text-3xl mb-24 opacity-85">Key Features</h2>

            <div className="flex">
              <div className="flex-0 w-96 mr-12">{this.renderProductTabs()}</div>
              <div className="flex-1">{this.renderProduct()}</div>
            </div>
          </div>
        </section>

        {testimonials &&
          testimonials.length > 0 && (
            <section id="testimonial" className="mt-48 pb-16 pt-16 relative">
              <div className="static-gradient purple absolute z-0" aria-hidden />

              <div className="container mx-auto relative z-5 flex flex-wrap items-center">
                {testimonials.map(Testimonial)}

                <div className="flex items-center mt-40 mb-12 w-full">
                  <div className="flex-1 text-center">
                    <Link href="/join">
                      <Button
                        color={colors.accent}
                        size={sizes.xl}
                        shadow
                        className="w-full max-w-xs"
                      >
                        Get Started
                      </Button>
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

export default withRouteData(HomePage);
