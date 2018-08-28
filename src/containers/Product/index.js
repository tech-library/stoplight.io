import React from 'react';
import { withRouteData, Link } from 'react-static';

import '../../styles/product-page.scss';

const Feature = ({ title, description, image }, index) => {
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
        <h1 className="mb-8">{title}</h1>

        <p className="mb-8">{description}</p>

        <Link to="/join" className="h-bottom-border-link" title="Create your free account">
          Create your free account
        </Link>
      </div>

      {isReversed && img}
    </section>
  );
};

class Product extends React.Component {
  render() {
    const {
      title,
      image,
      slogan,
      features,
      signupText,
      description,
      featureList,
      calltoAction,
    } = this.props;

    return (
      <div>
        <div className="product-hero flex items-stretch">
          <div className="h-diagonal-stripes flex w-full">
            <div className="h-skewed-bg h-skewed-bg--bordered flex items-center w-full px-4">
              <div className="container mx-auto flex">
                <section className="text-white">
                  <h1 className="h-text-5xl mb-8">Stoplight {title}</h1>

                  <p className="product-hero__info h-text-md mb-8">{slogan}</p>

                  <Link
                    to="/join"
                    title="Signup"
                    className="product-hero__button inline-block h-button text-white font-bold py-2 px-8"
                  >
                    Signup
                  </Link>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="docs-info">
          <div className="container mx-auto">
            <div className="docs-info__col">
              <img className="docs-info__screenshot" src={image} alt="" />

              <div className="docs-info__content">
                <p className="max-w-sm h-text-md">{description}</p>

                <ul className="docs-info__list pt-2">
                  {featureList.map((feature, key) => (
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
              <h1 className="mb-8">Interested in {title}?</h1>

              <p className="mb-8">{signupText}</p>

              <div className="text-center">
                <Link
                  to="/join"
                  className="inline-block h-bg-purple h-button text-white font-bold py-4 px-8 hover:text-white"
                  title="Singup"
                >
                  Singup
                </Link>
              </div>
            </div>
          </div>
        </div>

        {features &&
          features.length && (
            <div className="features container mx-auto h-gap">{features.map(Feature)}</div>
          )}

        <div className="py-8 bg-blue-lightest">
          <p className="max-w-lg mx-auto h-text-2xl font-semibold font-bold text-center px-4 my-8">
            {calltoAction}
          </p>

          <div className="text-center py-8">
            <Link
              to="/join"
              className="inline-block h-bg-purple h-button text-white font-bold py-4 px-8 hover:text-white"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouteData(Product);
