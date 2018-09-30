import React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import { withRouteData, Link } from 'react-static';

import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

import { colors, sizes, Button, Icon } from '@stoplight/ui';

import Hero from '../../components/Hero';
import ImageSection from '../../components/ImageSection';
import Section from '../../components/Section';

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

    const { features = [] } = props;

    this.state = {};

    if (features.length) {
      this.state.featureTab = features[0].title;
    }
  }

  renderFeatureTabs() {
    const { features } = this.props;
    const { featureTab } = this.state;

    return (
      <ul className="list-reset">
        {_.map(features, (feature, index) => {
          const isActive = feature.title === featureTab;

          return (
            <li
              key={index}
              className={cn('flex items-center cursor-pointer', {
                'text-accent-dark': isActive,
                'hover:opacity-85': !isActive,
                'mt-20': index !== 0,
              })}
              onClick={() => this.setState({ featureTab: feature.title })}
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
              <div className="text-2xl font-bold leading-loose">{feature.title}</div>
            </li>
          );
        })}
      </ul>
    );
  }

  renderFeature() {
    const { features } = this.props;
    const { image, href, description, title } = features.find(
      feature => feature.title === this.state.featureTab
    );

    return (
      <div>
        <img className="w-full shadow-lg rounded-xl" src={image} alt="" />
        <p className="mt-12 text-2xl">{description}</p>

        <p className="mt-8 text-xl text-right">
          <a
            href={href}
            className="text-grey-darkest border-b-2 border-accent-dark pb-2 font-bold text-lg hover:border-transparent hover:text-grey-dark"
          >
            Learn more about the {title}
          </a>
        </p>
      </div>
    );
  }

  render() {
    const { hero, product, customers = [], testimonials = [], features = [] } = this.props;

    const elems = [];

    if (hero) {
      elems.push(<Hero key="hero" {...hero} />);
    }

    if (product) {
      elems.push(<ImageSection key="product" {...product} />);
    }

    if (customers.length) {
      elems.push(
        <Section key="customers" bgClassName="bg-grey-lightest">
          <div className="container">
            <h2 className="text-center mb-20">
              Thousands of companies use Stoplight to streamline
              <br />
              their API &amp; Microservices workflow
            </h2>

            <div className="flex justify-center flex-wrap items-center">
              {customers.map((customer, key) => {
                return (
                  <div key={key} className="p-8 text-center">
                    <img className="h-14" src={customer} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      );
    }

    if (features.length) {
      elems.push(
        <Section key="features">
          <div className="container">
            <h2 className="text-center mb-20">Key Features</h2>

            <div className="flex">
              <div className="flex-0 w-96 mr-12">{this.renderFeatureTabs()}</div>
              <div className="flex-1">{this.renderFeature()}</div>
            </div>
          </div>
        </Section>
      );
    }

    if (testimonials.length) {
      elems.push(
        <Section key="testimonials" bgClassName="bg-grey-lightest">
          <div className="container flex flex-wrap items-center">
            {testimonials.map(Testimonial)}

            <div className="flex items-center mt-40 mb-12 w-full">
              <div className="flex-1 text-center">
                <Link to="/join">
                  <Button color={colors.accent} size={sizes.xl} shadow className="w-full max-w-xs">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      );
    }

    return elems;
  }
}

export default withRouteData(HomePage);
