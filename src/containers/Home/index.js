import React from 'react';
import cn from 'classnames';
import { withRouteData, Link } from 'react-static';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from '@components/Hero';
import ImageSection from '@components/ImageSection';
import Section from '@components/Section';
import CallToAction from '@components/CallToAction';

const Testimonial = ({ image, quote, author, company, role }, key) => {
  return (
    <div key={key} className="w-1/2 flex px-14 pb-20">
      <div className="testimonial-card max-w-lg w-full lg:flex shadow-lg mx-auto items-stretch bg-white">
        <div className="flex flex-col justify-center">
          <div
            className="-ml-14 rounded-full bg-cover shadow-sm border-grey border h-40 w-40"
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
  constructor(props) {
    super(props);

    const { features = [] } = props;

    this.state = {};

    if (features.length) {
      this.state.featureTab = features[0].title;
    }
  }

  // renderFeatureTabs() {
  //   const { features = [] } = this.props;
  //   const { featureTab } = this.state;

  //   return (
  //     <ul className="list-reset">
  //       {features.map((feature, index) => {
  //         const isActive = feature.title === featureTab;

  //         return (
  //           <li
  //             key={index}
  //             className={cn('flex items-center cursor-pointer', {
  //               'text-accent-dark': isActive,
  //               'hover:opacity-85': !isActive,
  //               'mt-20': index !== 0,
  //             })}
  //             onClick={() => this.setState({ featureTab: feature.title })}
  //           >
  //             <div
  //               className={cn(
  //                 'rounded-full h-14 w-14 flex items-center justify-center text-white mr-6',
  //                 {
  //                   'bg-grey-darkest': !isActive,
  //                   'bg-accent-dark': isActive,
  //                 }
  //               )}
  //             >
  //               <FontAwesomeIcon icon={['fas', 'check']} size="lg" />
  //             </div>
  //             <div className="text-2xl font-bold leading-loose">{feature.title}</div>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }

  // renderFeature() {
  //   const { features } = this.props;
  //   const { image, href, description, title } = features.find(
  //     feature => feature.title === this.state.featureTab
  //   );

  //   return (
  //     <div>
  //       <img className="w-full shadow-lg rounded-xl" src={image} alt="" />
  //       <p className="mt-12 text-2xl">{description}</p>

  //       <p className="mt-8 text-xl text-right">
  //         <Link
  //           to={href}
  //           className="text-grey-darkest border-b-2 border-accent-dark pb-2 font-bold text-lg hover:border-transparent hover:text-grey-dark"
  //         >
  //           Learn more about the {title}
  //         </Link>
  //       </p>
  //     </div>
  //   );
  // }

  render() {
    const { color, hero, product, customers = [], testimonials = [], features = [] } = this.props;

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
                  <div key={key} className="p-8 text-center">
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

    // if (features.length) {
    //   elems.push(
    //     <Section key="features">
    //       <div className="container">
    //         <h2 className="text-center mb-20 text-3xl hidden">Key Features</h2>

    //         <div className="flex">
    //           <div className="flex-0 w-96 mr-12">{this.renderFeatureTabs()}</div>
    //           <div className="flex-1">{this.renderFeature()}</div>
    //         </div>
    //       </div>
    //     </Section>
    //   );
    // }

    if (testimonials.length) {
      elems.push(
        <Section key="testimonials" bgClassName="bg-grey-lightest">
          <div className="container">
            <div className="flex flex-wrap -mx-14">{testimonials.map(Testimonial)}</div>
          </div>
        </Section>
      );
    }

    return elems;
  }
}

export default withRouteData(HomePage);
