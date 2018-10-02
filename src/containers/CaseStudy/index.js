import React from 'react';
import cn from 'classnames';
import { withRouteData, Link } from 'react-static';

import Hero from '@components/Hero';

import '@styles/individual-case-study.scss';
import '@styles/markdown.scss';
import '@styles/highlight.scss';

const CustomerInfo = ({ logo, name }) => {
  return (
    <div className="p-8 border rounded w-1/3 bg-white -mt-64">
      <div className="text-center">
        <div className="p-8">{logo ? <img src={logo} alt={name} /> : <h1>{name}</h1>}</div>
      </div>
    </div>
  );
};

class CaseStudy extends React.Component {
  render() {
    const { hero, logo, customerInfo, html } = this.props;

    const elems = [];

    if (hero) {
      elems.push(<Hero key="hero" {...hero} pageName="customer story" aligned="left" />);
    }

    elems.push(
      <div className="container mx-auto pb-24 pt-16">
        <div className="relative flex flex-wrap">
          <div
            key="html"
            className={cn('markdown-body w-2/3')}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {customerInfo && <CustomerInfo {...customerInfo} />}
        </div>
      </div>
    );

    return elems;

    return (
      <div>
        <div className="study flex items-stretch">
          <div className="h-diagonal-stripes flex w-full">
            <div className="h-skewed-bg h-skewed-bg--bordered flex items-end w-full">
              <div className="container mx-auto">
                <section className="study__col-1 text-white">
                  <h1 className="h-text-5xl mb-8">{title}</h1>

                  <p className="max-w-lg h-text-md font-semibold">{description}</p>
                </section>

                <section className="study__col-2 study__card shadow-lg bg-white flex items-center justify-center">
                  <div className="p-8">
                    <div className="p-8">
                      <img src={logo} alt={title} />
                    </div>

                    {features &&
                      features.length > 0 && (
                        <div className="p-8">
                          <div className="h-text-xl font-bold mb-4">Featured Highlights</div>
                          <ul>
                            {features.map((feature, index) => {
                              return <li key={index}>{feature}</li>;
                            })}
                          </ul>
                        </div>
                      )}
                  </div>

                  <nav className="study__navigation flex justify-between">
                    {prev && <Link to={`/case-studies/${prev.slug}`}>&larr; {prev.title}</Link>}

                    {next && <Link to={`/case-studies/${next.slug}`}>&rarr; {next.title}</Link>}
                  </nav>
                </section>
              </div>
            </div>
          </div>
        </div>

        {goal && (
          <div className="h-gap">
            <h1 className="text-center mb-8">The Goal</h1>
            <p className="px-6 max-w-lg text-lg mx-auto text-center leading-loose">{goal.body}</p>
          </div>
        )}

        {solution && (
          <div className="solution flex items-center">
            <div className="container m-auto">
              <div className="solution__col">
                <div className="mb-4 solution__heading">
                  <h1>The Solution</h1>
                  <div className="h-text-md">{solution.title}</div>
                </div>

                <p>{solution.body}</p>
              </div>

              <div className="solution__col">
                <img src={solution.image} alt={solution.title} />
              </div>
            </div>
          </div>
        )}

        {results && (
          <div className="h-gap">
            <h1 className="text-center mb-2">The Results</h1>
            <p className="px-6 max-w-lg text-lg mx-auto text-center leading-loose">
              {results.body}
            </p>

            <img src={results.image} alt={results.title} />
          </div>
        )}

        <section className="h-gap">
          <h1 className="max-w-lg mx-auto text-center my-8 px-4">
            Some kind of clever call to action that drives people to this button.
          </h1>

          <div className="text-center">
            <Link
              to="https://next.stoplight.io"
              title="Signup"
              className="h-button inline-block h-bg-purple h-button text-white font-bold py-4 px-8 hover:text-white"
            >
              Signup
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouteData(CaseStudy);
