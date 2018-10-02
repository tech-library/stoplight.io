import React from 'react';
import { withRouteData } from 'react-static';

import Hero from '@components/Hero';
import ImageSection from '@components/ImageSection';
import Section from '@components/Section';
import CallToAction from '@components/CallToAction';
import ActionBar from '@components/ActionBar';

const Testimonial = ({ image, quote, author, company, role }, key) => {
  return (
    <div key={key} className="w-1/2 sm:w-full flex px-14 pb-20 sm:px-0 sm:px-10">
      <div className="testimonial-card max-w-lg w-full lg:flex shadow-lg mx-auto items-stretch bg-white">
        <div className="flex flex-col justify-center sm:items-center sm:pt-8">
          <div
            className="-ml-14 sm:ml-0 rounded-full bg-cover shadow-sm border-grey border h-40 w-40"
            style={{
              backgroundImage: `url(${image})`,
            }}
            alt={author}
          />
        </div>

        <div className="p-8 flex flex-col justify-center leading-normal">
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
  render() {
    const { color, hero, product, customers = [], testimonials = [], actionBar = {} } = this.props;

    const elems = [];

    if (hero) {
      elems.push(<Hero key="hero" bgColor={color} {...hero} />);
    }

    if (product) {
      elems.push(<ImageSection key="product" {...product} />);
    }

    if (customers.length) {
      elems.push(
        <Section key="customers" bgClassName="bg-grey-lightest">
          <div className="container">
            <h2 className="text-center mb-20 text-3xl md:mb-14">
              Thousands of companies use Stoplight to streamline
              <br />
              their API &amp; Microservices workflow
            </h2>

            <div className="flex justify-center flex-wrap items-center pb-32 md:pb-20">
              {customers.map((customer, key) => {
                return (
                  <div key={key} className="sm:w-1/2 sm:p-6 p-8 text-center">
                    <img className="h-12" src={customer} alt="" />
                  </div>
                );
              })}
            </div>

            <CallToAction
              name="Read The Case Studies"
              href="/case-studies"
              className="text-center"
              size="lg"
              color="green"
            />
          </div>
        </Section>
      );
    }

    if (testimonials.length) {
      elems.push(
        <Section key="testimonials">
          <div className="container">
            <div className="flex flex-wrap -mx-14 sm:mx-0">{testimonials.map(Testimonial)}</div>
          </div>

          {actionBar && actionBar.enabled ? (
            <ActionBar className="bg-grey-lightest sm:mt-20 mt-32" {...actionBar} />
          ) : null}
        </Section>
      );
    }

    return elems;
  }
}

export default withRouteData(HomePage);
