import React from 'react';
import { withRouteData } from 'react-static';

import Hero from '@components/Hero';
import Section from '@components/Section';
import CallToAction from '@components/CallToAction';
import ActionBar from '@components/ActionBar';
import Testimonial from '@components/Testimonial';

class HubSpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    if (window.hbspt) {
      this.createForm();
    } else {
      this.loadScript();
    }
  }

  createForm = () => {
    const { hubspot } = this.props;
    const { portalId, formId } = hubspot || {};

    if (!window.hbspt || !portalId || !formId) return;

    window.hbspt.forms.create({
      target: '#hubspot-form',
      portalId,
      formId,
    });

    this.setState({ isLoaded: true });
  };

  loadScript = () => {
    const script = document.createElement(`script`);
    script.defer = true;
    script.onload = () => {
      this.createForm();
    };
    script.src = `//js.hsforms.net/forms/v2.js`;

    document.head.appendChild(script);
  };

  render() {
    const { color, hero, hubspot, customers = [], testimonials = [], actionBar = {} } = this.props;
    const { isLoaded } = this.state;

    const elems = [];

    if (hero) {
      elems.push(<Hero key="hero" bgColor={color} {...hero} />);
    }

    if (hubspot) {
      elems.push(
        <Section key="hubspot" bgClassName="bg-grey-lightest">
          <div className="container flex items-center justify-center">
            <div
              className="bg-white shadow rounded p-16 -mt-64"
              style={{ display: isLoaded ? 'block' : 'none', width: 600 }}
              id="hubspot-form"
            />
          </div>
        </Section>
      );
    }

    if (customers.length) {
      elems.push(
        <Section key="customers">
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
        <Section key="testimonials" bgClassName="bg-grey-lightest">
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

export default withRouteData(HubSpotForm);
