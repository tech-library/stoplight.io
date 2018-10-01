import React from 'react';
import { withRouteData } from 'react-static';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DocPlans from '@components/DocPlans';
import Hero from '@components/Hero';
import Section from '@components/Section';
import CallToAction from '@components/CallToAction';

const PlanFeature = ({ color, name }) => {
  return (
    <div className="flex items-center py-2">
      <FontAwesomeIcon
        key="1"
        icon={['fas', 'check-circle']}
        className={`mr-3 text-lg text-${color}`}
      />{' '}
      <div>{name}</div>
    </div>
  );
};

const Plan = props => {
  const {
    title,
    description,
    price,
    unit,
    inheritedFeatures = [],
    features = [],
    titleColor,
    cta,
  } = props;

  return (
    <div className="flex-1 mx-6">
      <div className="bg-white p-10 shadow-lg rounded">
        <div className="mb-10 bg-grey-lightest px-8 py-8 -mt-10 -mx-10">
          <div className={`font-bold pb-3 uppercase text-${titleColor || 'grey-darkest'}`}>
            {title}
          </div>
          <div className="leading-loose">{description}</div>
        </div>

        <div className="font-bold mb-4 text-xl flex items-center">
          {price}
          {unit && <span className="font-default text-base ml-3">{unit}</span>}
        </div>

        <div className="mb-10">
          {features.map((feature, key) => (
            <PlanFeature key={key} name={feature} color="green" />
          ))}

          {inheritedFeatures.map((feature, key) => (
            <PlanFeature key={key} name={feature} color="grey" />
          ))}
        </div>

        {cta && <CallToAction {...cta} shadow={false} />}
      </div>
    </div>
  );
};

const PricingPage = ({ color, hero, plans = [], docs }) => {
  const elems = [];

  if (hero) {
    elems.push(
      <Hero key="hero" bgColor={color} {...hero} skew="7deg" containerClassName="pb-64" />
    );
  }

  if (plans.length) {
    elems.push(
      <div key="plans" className="container -mt-64 z-5 relative">
        <div className="flex -mx-6">
          {plans.map((plan, index) => (
            <Plan key={index} titleColor={color} {...plan} />
          ))}
        </div>
      </div>
    );
  }

  if (docs) {
    elems.push(
      <Section key="docs">
        <DocPlans {...docs} />
      </Section>
    );
  }

  return elems;
};

export default withRouteData(PricingPage);
