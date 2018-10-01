import React from 'react';
import { withRouteData } from 'react-static';
import cn from 'classnames';

import CallToAction from '@components/CallToAction';
import Hero from '@components/Hero';
import Section from '@components/Section';

import { slugify } from '@utils/text';

const ProductFeature = ({ title, description, image, isReversed, titleColor }) => {
  return [
    <a key="anchor" name={slugify(title)} />,
    <div
      key="content"
      className={cn('flex items-center py-12', {
        'flex-row': !isReversed,
        'flex-row-reverse': isReversed,
      })}
    >
      <div
        className={cn('flex flex-col flex-1 w-1/2 md:w-100', {
          'pr-24': !isReversed,
          'pl-18': isReversed,
        })}
      >
        <h2 className={cn('max-w-sm mb-10 text-3xl', `text-${titleColor || 'grey-darkest'}`)}>
          {title}
        </h2>
        <div className="mb-12 pb-12 max-w-md leading-loose text-lg">{description}</div>
      </div>

      <div className="flex-1 w-1/2 md:hidden relative">
        <div
          className="bg-left-top bg-cover bg-no-repeat h-128 w-128 rounded-full"
          style={{ backgroundImage: `url(${image})`, boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)' }}
        />
      </div>
    </div>,
  ];
};

class Product extends React.Component {
  render() {
    const { color, hero, product = {}, features = [] } = this.props;

    const elems = [];

    if (hero) {
      elems.push(
        <Hero
          key="hero"
          bgColor={color}
          {...hero}
          features={features.map(feature => ({
            name: feature.shortName,
            href: `#${slugify(feature.title)}`,
          }))}
        />
      );
    }

    if (product) {
      elems.push(
        <Section key="product" bgClassName="bg-grey-lightest">
          <div className="container border-b pb-32">
            <h2 className="text-center mb-12 text-3xl">{product.title}</h2>
            <div className="flex leading-loose text-lg text-center max-w-lg mx-auto">
              {product.description}
            </div>
            {product.cta && <CallToAction {...product.cta} className="mx-auto text-center mt-20" />}
          </div>

          <div key="features" className="container mx-auto py-16">
            {features.map((feature, index) => (
              <ProductFeature
                key={index}
                titleColor={color}
                {...feature}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </Section>
      );
    }

    return elems;
  }
}

export default withRouteData(Product);
