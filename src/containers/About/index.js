import React from 'react';
import { withRouteData, Link } from 'react-static';

import '@styles/about.scss';

import Hero from '@components/Hero';

const Quote = ({ image, company, quote, author, role }, key) => {
  return (
    <section key={key} className="business-love__card px-3 flex">
      <div className="w-full py-2 px-2 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
        <div className="px-2 py-8 mb-8 h-32 flex justify-center items-start">
          <img src={image} alt={company} />
        </div>

        <div className="px-2 py-4">
          <p className="mb-2">{quote}</p>
          <p className="h-text-purple">
            <span className="font-bold">{author}</span>, {company}, {role}
          </p>
        </div>
      </div>
    </section>
  );
};

const Member = ({ image, name, role, twitter }) => {
  return (
    <div className="text-center shadow bg-white py-8 px-4 w-64 rounded-lg">
      <div
        className="-mt-20 mx-auto rounded-full bg-cover shadow-sm border-grey border h-32 w-32 mb-6"
        style={{
          backgroundImage: `url(${image})`,
        }}
        alt={name}
      />

      <div className="font-bold uppercase text-green">{name}</div>
      {role && <div className="pt-2">{role}</div>}
      {twitter && (
        <div className="pt-2">
          <a href={`https://twitter.com/${twitter}`}>{twitter}</a>
        </div>
      )}
    </div>
  );
};

const Press = ({ image, description, publication }, key) => {
  return (
    <section key={key} className="press__card flex">
      <div className="w-full px-4 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
        <div className="px-6 py-8 mb-8 h-32 flex justify-center items-start">
          <img src={image} alt={publication} />
        </div>

        <div className="h-24">
          <a href="#" target="_blank" className="font-bold h-text-purple">
            {description}
          </a>
        </div>
      </div>
    </section>
  );
};

class About extends React.Component {
  render() {
    const { color, hero, quotes, team = [], press, investors, career } = this.props;

    return (
      <div>
        <Hero key="hero" bgColor={color} {...hero} containerClassName="pb-24" />

        {team.length ? (
          <section className="bg-grey-lightest relative z-10" style={{ marginTop: -50 }}>
            <div className="container flex flex-wrap justify-center text-center ">
              {team.map((member, index) => (
                <div key={index} className="mx-10 mb-48 -mt-24">
                  <Member {...member} />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {quotes &&
          quotes.length > 0 && (
            <section className="business-love bg-grey-lightest h-skewed-bg py-8">
              <h1 className="text-center">Businesses Are Loving Stoplight</h1>

              <section className="container mx-auto py-4 flex flex-wrap space-between">
                {quotes.map(Quote)}
              </section>
            </section>
          )}

        {press &&
          press.length > 0 && (
            <section className="press bg-grey-lightest h-skewed-bg py-4">
              <h1 className="text-center my-8">In the Press</h1>

              <div className="container mx-auto py-4 flex flex-wrap space-between">
                {press.map(Press)}
              </div>
            </section>
          )}

        {career && (
          <section className="h-gap">
            <h1 className="text-center my-8">Work at Stoplight</h1>

            <div className="text-center">
              <p className="max-w-lg text-lg h-text-md mx-auto py-8 mb-8">{career}</p>

              <Link
                to="/careers"
                title="Careers"
                className="h-bg-purple h-button text-white font-bold py-4 px-8 hover:text-white"
              >
                Careers
              </Link>
            </div>
          </section>
        )}

        {investors &&
          investors.length > 0 && (
            <section className="investors bg-blue-lightest py-8">
              <h1 className="text-center pb-8">Our Investors</h1>

              <div className="investors__images pb-8">
                {investors.map(({ image, name }, key) => (
                  <img key={key} src={image} alt={name} />
                ))}
              </div>
            </section>
          )}
      </div>
    );
  }
}

export default withRouteData(About);
