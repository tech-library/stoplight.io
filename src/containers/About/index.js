import React from 'react';
import { withRouteData, Link } from 'react-static';

import '../../styles/about.scss';

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

const Member = ({ image, name, role }, key) => {
  return (
    <div key={key} className="collage__employee collage__employee--1">
      <img src={image} alt={name} />

      <div className="collage__info">
        <div className="collage__name">{name}</div>
        <div className="collage__role">{role}</div>
      </div>
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
    const {
      backgroundImage,
      logo,
      description,
      mission,
      quotes,
      team,
      press,
      investors,
      career,
    } = this.props;

    return (
      <div>
        <header className="relative">
          <div
            style={{
              height: '620px',
              backgroundImage: `url(${backgroundImage})`,
            }}
            className="hero h-gradient-image flex items-stretch"
          >
            <div className="h-diagonal-stripes flex w-full">
              <div className="h-skewed-bg h-skewed-bg--bordered flex items-center w-full">
                <section className="container mx-auto">
                  <img
                    style={{
                      maxWidth: '130px',
                    }}
                    className="max-w-lg mx-auto block robot-dude mb-6"
                    src={logo}
                    alt="Logo"
                  />

                  <p className="max-w-lg text-lg pt-8 h-text-md mx-auto text-center font-bold text-xl">
                    {description}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </header>

        {mission && (
          <div className="h-gap">
            <section className="container mx-auto py-4">
              <h1 className="text-center mb-2">Our Mission</h1>
              <p className="max-w-lg text-lg h-text-md mx-auto text-center px-2 py-8">{mission}</p>
            </section>
          </div>
        )}

        {quotes &&
          quotes.length > 0 && (
            <section className="business-love bg-grey-lightest h-skewed-bg py-8">
              <h1 className="text-center">Businesses Are Loving Stoplight</h1>

              <section className="container mx-auto py-4 flex flex-wrap space-between">
                {quotes.map(Quote)}
              </section>
            </section>
          )}

        {team &&
          team.members.length > 0 && (
            <section className="meet-our-team py-4 h-gap">
              <div className="meet-our-team__col meet-our-team__col--1 p-8">
                <div className="collage">{team.members.map(Member)}</div>
              </div>

              <div className="meet-our-team__col meet-our-team__col--2 p-8">
                <h1 className="mb-6">Meet Our Winning Team</h1>
                <p className="mb-6">{team.description}</p>
                <Link to={'/team'} className="h-bottom-border-link">
                  Meet the Team
                </Link>
              </div>
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
