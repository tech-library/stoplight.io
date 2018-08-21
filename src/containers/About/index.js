import React from 'react';
import _ from 'lodash';

import '../../styles/about.scss';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="relative">
          <div
            style={{
              height: '620px',
              backgroundImage: 'url(/images/hero-bg.jpg)',
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
                    src="/images/robot-dude.svg"
                    alt="StopLight logo"
                  />

                  <p className="max-w-lg text-lg pt-8 h-text-md mx-auto text-center font-bold text-xl">
                    Stoplight is the best platform for an API design first approach. Easily create your design spec in any format. Then run tests, mock responses, and create beautiful documentation.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </header>

        <div className="h-gap">
          <section className="container mx-auto py-4">
            <h1 className="text-center mb-2">Our Mission</h1>
            <p className="max-w-lg text-lg h-text-md mx-auto text-center px-2 py-8">
              Stoplight is the best platform for an API design first approach. Easily create your design spec in any format. Then run tests, mock responses, and create beautiful documentation.
            </p>
          </section>
        </div>

        <section className="business-love bg-grey-lightest h-skewed-bg py-8">
          <h1 className="text-center">Businesses Are Loving Stoplight</h1>

          <section className="container mx-auto py-4 flex flex-wrap space-between">
            <section className="business-love__card px-3 flex">
              <div className="w-full py-2 px-2 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
                <div className="px-2 py-8 mb-8 h-32 flex justify-center items-start">
                  <img src="/images/burst-sms-logo.png" alt="BurstSMS" />
                </div>

                <div className="px-2 py-4">
                  <p className="mb-2">
                    Great product, really does take the pain out of creating and maintaining swagger specs.
                  </p>
                  <p className="h-text-purple">
                    <span className="font-bold">Mike Bissett</span>, Burstsms, CTO
                  </p>
                </div>
              </div>
            </section>

            <section className="business-love__card px-3 flex">
              <div className="w-full py-2 px-2 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
                <div className="px-2 py-8 mb-8 h-32 flex justify-center items-start">
                  <img src="/images/batteries911-logo.png" alt="Batteries911" />
                </div>

                <div className="px-2 py-4">
                  <p className="mb-2">
                    It provides a beautiful UX around the otherwise boring task of documenting APIs. The proxy is also very useful in debugging mistakes in API usage.
                  </p>
                  <p className="h-text-purple">
                    <span className="font-bold">Alessandro Desantis</span>, Batteries911, CTO
                  </p>
                </div>
              </div>
            </section>

            <section className="business-love__card px-3 flex">
              <div className="w-full py-2 px-2 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
                <div className="px-2 py-8 mb-8 h-32 flex justify-center items-start">
                  <img src="/images/deutsche-bank-logo.png" alt="Deutsche Bank" />
                </div>

                <div className="px-2 py-4">
                  <p className="mb-2">
                    Creating more accurate and complete OAS specifications and the ability to tackle more complex APIs efficiently.
                  </p>
                  <p className="h-text-purple">
                    <span className="font-bold">Carlos Lozano</span>, Deutsche Bank & GFT, Service Architect &amp; Technology Director
                  </p>
                </div>
              </div>
            </section>

            <section className="business-love__card px-3 flex">
              <div className="w-full py-2 px-2 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
                <div className="px-2 py-8 mb-8 h-32 flex justify-center items-start">
                  <img src="/images/360dialog-logo.png" alt="360dialog" />
                </div>

                <div className="px-2 py-4">
                  <p className="mb-2">
                    We have developed a bunch of microservices using Stoplight's API modeling/design along with API documentation. It worked great as a collaboration platform.
                  </p>
                  <p className="h-text-purple">
                    <span className="font-bold">Jan Chaloupecky</span>, 360dialog, Head of Mobile
                  </p>
                </div>
              </div>
            </section>

            <section className="business-love__card px-3 flex">
              <div className="w-full py-2 px-2 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
                <div className="px-2 py-8 mb-8 h-32 flex justify-center items-start">
                  <img src="/images/zendesk-logo.png" alt="Zendesk" />
                </div>

                <div className="px-2 py-4">
                  <p className="mb-2">
                    Unifies documentation, schema, good practices.
                  </p>
                  <p className="h-text-purple">
                    <span className="font-bold">Michel Pigassou</span>, Zendesk, Project lead on Custom Resources
                  </p>
                </div>
              </div>
            </section>

            <section className="business-love__card px-3 flex">
              <div className="w-full py-2 px-2 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
                <div className="px-2 py-8 mb-8 h-32 flex justify-center items-start">
                  <img src="/images/chargify-logo.png" alt="Chargify" />
                </div>

                <div className="px-2 py-4">
                  <p className="mb-2">
                    It solves giving us a consistent formatting and approach to documenting our API (prevents divergence of doc patterns).
                  </p>
                  <p className="h-text-purple">
                    <span className="font-bold">Drew</span>, Chargify, Director of Ops
                  </p>
                </div>
              </div>
            </section>
          </section>
        </section>

        <section className="meet-our-team py-4 h-gap">
          <div className="meet-our-team__col meet-our-team__col--1 p-8">
            <div className="collage">
              <div className="collage__employee collage__employee--1">
                <img src="/images/team/marc-macleod.png" alt="Marc Macleod" />

                <div className="collage__info">
                  <div className="collage__name">Marc Macleod</div>
                  <div className="collage__role">Founder and CEO</div>
                </div>
              </div>

              <div className="collage__employee collage__employee--2">
                <img src="/images/team/ross-mcdonald.png" alt="Ross Mcdonald" />

                <div className="collage__info">
                  <div className="collage__name">Ross Mcdonald</div>
                  <div className="collage__role">Role TBD</div>
                </div>
              </div>

              <div className="collage__employee collage__employee--3">
                <img src="/images/team/chris-lott.png" alt="Chris Lott" />

                <div className="collage__info">
                  <div className="collage__name">Chris Lott</div>
                  <div className="collage__role">Role TBD</div>
                </div>
              </div>

              <div className="collage__employee collage__employee--4">
                <img src="/images/team/thomas-pytleski.png" alt="Thomas Pytleski" />

                <div className="collage__info">
                  <div className="collage__name">Thomas Pytleski</div>
                  <div className="collage__role">Role TBD</div>
                </div>
              </div>

              <div className="collage__employee collage__employee--5">
                <img src="/images/team/scott-faust.png" alt="Scott Faust" />

                <div className="collage__info">
                  <div className="collage__name">Scott Faust</div>
                  <div className="collage__role">Role TBD</div>
                </div>
              </div>

              <div className="collage__employee collage__employee--6">
                <img src="/images/team/robert-wallach.png" alt="Robert Wallach" />

                <div className="collage__info">
                  <div className="collage__name">Robert Wallach</div>
                  <div className="collage__role">Role TBD</div>
                </div>
              </div>

              <div className="collage__employee collage__employee--7">
                <img src="/images/team/taylor-barneett.png" alt="Taylor Barneett" />

                <div className="collage__info">
                  <div className="collage__name">Taylor Barneett</div>
                  <div className="collage__role">Role TBD</div>
                </div>
              </div>

              <div className="collage__employee collage__employee--8">
                <img src="/images/team/vazha-omanashvili.png" alt="Vazha Omanash" />

                <div className="collage__info">
                  <div className="collage__name">Vazha Omanashvili</div>
                  <div className="collage__role">Role TBD</div>
                </div>
              </div>
            </div>
          </div>

          <div className="meet-our-team__col meet-our-team__col--2 p-8">
            <h1 className="mb-6">Meet Our Winning Team</h1>
            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#" className="h-bottom-border-link">Meet the Team</a>
          </div>
        </section>

        <section className="press bg-grey-lightest h-skewed-bg py-4">
          <h1 className="text-center my-8">In the Press</h1>

          <div className="container mx-auto py-4 flex flex-wrap space-between">
            <section className="press__card flex">
              <div className="w-full px-4 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
                <div className="px-6 py-8 mb-8 h-32 flex justify-center items-start">
                  <img src="/images/programmableweb-logo.png" alt="Programmable Web" />
                </div>

                <div className="h-24">
                  <a href="#" target="_blank" className="font-bold h-text-purple">
                    Stoplight Launches Scenarios API Testing and Debugging Tool
                  </a>
                </div>
              </div>
            </section>

            <section className="press__card flex">
              <div className="w-full px-4 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
                <div className="px-6 py-8 mb-8 h-32 flex justify-center items-start">
                  <img src="/images/infoq-logo.png" alt="InfoQ" />
                </div>

                <div className="h-24">
                  <a href="#" target="_blank" className="font-bold h-text-purple">
                    StopLight Launches Visual API Design Tools
                  </a>
                </div>
              </div>
            </section>

            <section className="press__card flex">
              <div className="w-full px-4 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
                <div className="px-6 py-8 mb-8 h-32 flex justify-center items-start">
                  <img src="/images/thenewstack-logo.png" alt="The New Stack" />
                </div>

                <div className="h-24">
                  <a href="#" target="_blank" className="font-bold h-text-purple">
                    StopLight Launches a Modeling Suite to Design, Test and Document APIs
                  </a>
                </div>
              </div>
            </section>

            <section className="press__card flex">
              <div className="w-full px-4 overflow-hidden shadow-lg bg-white flex flex-col justify-between">
                <div className="px-6 py-8 mb-8 h-32 flex justify-center items-start">
                  <img src="/images/sendgrid-logo.png" alt="SendGrid" />
                </div>

                <div className="h-24">
                  <a href="#" target="_blank" className="font-bold h-text-purple">
                    Using a Prototype as an API Product Specification
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="h-gap">
          <h1 className="text-center my-8">Work at Stoplight</h1>

          <div className="text-center">
            <p className="max-w-lg text-lg h-text-md mx-auto py-8 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <a href="#" className="h-bg-purple h-button text-white font-bold py-4 px-8 hover:text-white">
              Signup
            </a>
          </div>
        </section>

        <section className="investors bg-blue-lightest py-8">
          <h1 className="text-center pb-8">Our Investors</h1>

          <div className="investors__images pb-8">
            <img src="/images/nextgen-venture-partners-logo.png" alt="Nextgen venture partners" />

            <img src="/images/capital-factory-logo.png" alt="Capital factory" />

            <img src="/images/techstars-logo.png" alt="Techstars" />
          </div>
        </section>
      </div>
    );
  }
}

export default About;
