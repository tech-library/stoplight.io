import React from 'react';
import { withRouteData, Link } from 'react-static';

import '../../styles/product-page.scss';
import DocPlans from '../../components/DocPlans';
import Hero from '../../components/Hero';

const Feature = ({ title, description, image, linkText, linkUrl }, index) => {
  const img = (
    <div className="features__col p-8">
      <img src={image} alt={title} />
    </div>
  );

  const isReversed = index % 2 === 0;

  let className = 'features__section';
  if (isReversed) {
    className += ' features__section--reverse';
  }

  return (
    <section key={index} className={className}>
      {!isReversed && img}

      <div className="features__col max-w-md p-8">
        <div className="text-4xl font-bold mb-8">{title}</div>

        <p className="mb-8">{description}</p>

        <Link to={linkUrl} className="h-bottom-border-link" title={linkText}>
          {linkText}
        </Link>
      </div>

      {isReversed && img}
    </section>
  );
};

class Product extends React.Component {
  render() {
    const {
      topSection,
      productSection = {},
      signupSection,
      featureSection,
      docsPlanSection,
      callToActionSection,
    } = this.props;

    const elems = [
      <Hero
        key="1"
        title={topSection.heading}
        subtitle={topSection.subheading}
        image={productSection.image}
        rootClassName="bg-green-darkest"
      />,
    ];

    return elems;

    return (
      <div>
        <div className="product-hero flex items-stretch">
          <div className="h-diagonal-stripes flex w-full">
            <div className="h-skewed-bg h-skewed-bg--bordered flex items-center w-full px-4">
              <div className="container mx-auto flex">
                <div className="text-white">
                  <h1 className="h-text-5xl mb-8">{topSection.heading}</h1>

                  <p className="product-hero__info h-text-md mb-8">{topSection.subheading}</p>

                  <Link
                    to={topSection.buttonUrl}
                    title={topSection.buttonText}
                    className="product-hero__button inline-block h-button text-white font-bold py-2 px-8"
                  >
                    {topSection.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="docs-info">
          <div className="container mx-auto">
            <div className="docs-info__col">
              <img className="docs-info__screenshot" src={productSection.image} alt="" />

              <div className="docs-info__content">
                <p className="max-w-sm h-text-md">{productSection.description}</p>

                <ul className="docs-info__list pt-2">
                  {productSection.features &&
                    productSection.features.map((feature, key) => (
                      <li key={key}>
                        <img src="/images/rounded-checkmark.svg" alt="check" />
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hosting-docs flex items-center">
          <div className="container m-auto">
            <div className="max-w-md mx-auto py-8 text-center">
              <div className="text-4xl font-bold mb-8">{signupSection.heading}</div>

              <p className="mb-8">{signupSection.subheading}</p>

              <div className="text-center">
                <Link
                  to={signupSection.buttonUrl}
                  title={signupSection.buttonText}
                  className="inline-block h-bg-purple h-button text-white font-bold py-4 px-8 hover:text-white"
                >
                  {signupSection.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {featureSection.features &&
          featureSection.features.length && (
            <div className="features container mx-auto h-gap">
              {featureSection.features.map(Feature)}
            </div>
          )}

        <div className="py-8 bg-blue-lightest">
          {docsPlanSection && <DocPlans {...docsPlanSection} />}

          <div className="container mx-auto text-center">
            <div className="text-4xl font-bold mb-8">{callToActionSection.heading}</div>

            <div className="text-center py-8">
              <Link
                to={callToActionSection.buttonUrl}
                title={callToActionSection.buttonText}
                className="inline-block h-bg-purple h-button text-white font-bold py-4 px-8 hover:text-white"
              >
                {callToActionSection.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouteData(Product);
