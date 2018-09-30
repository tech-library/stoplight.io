import React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import { withRouteData, Link } from 'react-static';

import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

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

    const elems = [
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

    if (platform) {
      elems.push(
        <section key="platform" className="relative z-1 mt-40 mb-32 md:px-4 flex">
          <div className="flex flex-col flex-1 w-1/2 md:w-100 text-right items-end pr-14">
            <h2 className="max-w-xs text-secondary text-right uppercase mb-10">{platform.title}</h2>

            <div className="mb-12 pb-12 max-w-md leading-loose text-lg border-b border-darken-50">
              {platform.description}
            </div>

            <a href="https://next.stoplight.io/join">
              <Button color={colors.purple} size={sizes.lg} className="rounded-md shadow">
                Get Started Now
              </Button>
            </a>
          </div>

          <div className="flex flex-col flex-1 w-1/2 md:hidden relative">
            <div
              className="absolute pin bg-left-top bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${platform.image})`, top: -60, bottom: -200 }}
            />
          </div>
        </section>
      );
    }

    if (customers && customers.length > 0) {
      elems.push(
        <section key="customers" className="relative z-5">
          <div id="section-gradient" className="absolute z-0" aria-hidden />
          <section className="relative z-5 flex items-center py-48 pb-40">
            <div className="container">
              <h2 className="text-center uppercase mb-20">
                Thousands of companies use Stoplight to streamline
                <br />
                their API &amp; Microservices workflows
              </h2>

              <div className="flex justify-center flex-wrap items-center">
                {customers.map((customer, key) => {
                  return (
                    <div key={key} className="p-6 text-center">
                      <img className="h-16" src={customer} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </section>
      );
    }

    elems.push(
      <section key="features" className="relative z-5 flex items-center py-48 pb-40">
        <div className="container">
          <h2 className="text-center uppercase mb-20">Key Features</h2>

          <div className="flex">
            <div className="flex-0 w-96 mr-12">{this.renderProductTabs()}</div>
            <div className="flex-1">{this.renderProduct()}</div>
          </div>
        </div>
      </section>
    );

    if (testimonials && testimonials.length > 0) {
      elems.push(
        <section key="testimonials" id="testimonial" className="mt-48 pb-16 pt-16 relative">
          <div className="static-gradient purple absolute z-0" aria-hidden />

          <div className="container mx-auto relative z-5 flex flex-wrap items-center">
            {testimonials.map(Testimonial)}

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
      );
    }

    return elems;
  }
}

export default withRouteData(HomePage);
