import React from 'react';
import { Link } from 'react-static';

import '../../styles/individual-case-study.scss';

class IndividualCaseStudy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="study flex items-stretch">
          <div className="h-diagonal-stripes flex w-full">
            <div className="h-skewed-bg h-skewed-bg--bordered flex items-end w-full">
              <div className="container mx-auto">
                <section className="study__col-1 text-white">
                  <h1 className="h-text-5xl mb-8">Deutsche Bank</h1>

                  <p className="max-w-lg h-text-md font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sapien orci. Nulla congue, sem at dapibus facilisis, purus metus hendrerit diam, tincidunt finibus eros libero eget ex.</p>
                </section>

                <section className="study__col-2 study__card shadow-lg bg-white flex items-center justify-center">
                  <div className="p-8">
                    <div className="p-8">
                      <img src="/images/deutsche-bank-logo.png" alt="Deutsche Bank" />
                    </div>

                    <div className="p-8">
                      <div className="h-text-xl font-bold mb-4">Featured Highlights</div>
                      <ul>
                        <li>Type Something</li>
                        <li>Another Something</li>
                        <li>Third Awesome Something</li>
                      </ul>
                    </div>
                  </div>

                  <nav className="study__navigation flex justify-between">
                    <a href="#">&larr; Previous Case</a>
                    <a href="#">Next Case &rarr;</a>
                  </nav>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="h-gap">
          <h1 className="text-center mb-8">The Goal</h1>
          <p className="px-6 max-w-lg text-lg mx-auto text-center leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus rutrum, posuere eros eget, molestie nibh. Aliquam ante urna, feugiat at condimentum eget, venenatis sed enim. Nunc eleifend sem in suscipit aliquet. Donec vel tristique ante. Pellentesque suscipit, velit eget pellentesque imperdiet, augue lectus consectetur dolor, sit amet eleifend eros turpis quis dui. Mauris rhoncus, diam et efficitur vehicula, mi tortor auctor lectus, id molestie lacus velit sit amet ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet lectus magna. Aliquam eget ligula vitae dolor ornare aliquet. Proin sit amet aliquet eros, vitae lacinia nisl.</p>
        </div>

        <div className="solution flex items-center">
          <div className="container m-auto">
            <div className="solution__col">
              <div className="mb-4 solution__heading">
                <h1>The Solution</h1>
                <div className="h-text-md">API Design</div>
              </div>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus rutrum, posuere eros eget, molestie nibh. Aliquam ante urna, feugiat at condimentum eget, venenatis sed enim. Nunc eleifend sem in suscipit aliquet. Donec vel tristique ante. Pellentesque suscipit, velit eget pellentesque imperdiet, augue lectus consectetur dolor, sit amet eleifend eros turpis quis dui. Mauris rhoncus, diam et efficitur vehicula, mi tortor auctor lectus, id molestie lacus velit sit amet ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet lectus magna. Aliquam eget ligula vitae dolor ornare aliquet. Proin sit amet aliquet eros, vitae lacinia nisl.</p>
            </div>

            <div className="solution__col">
              <img src="/images/individual-case-study/design-editor.png" alt="Design Editor" />
            </div>
          </div>
        </div>

        <div className="h-gap">
          <h1 className="text-center mb-2">The Results</h1>
          <p className="px-6 max-w-lg text-lg mx-auto text-center leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus rutrum, posuere eros eget, molestie nibh. Aliquam ante urna, feugiat at condimentum eget, venenatis sed enim. Nunc eleifend sem in suscipit aliquet. Donec vel tristique ante. Pellentesque suscipit, velit eget pellentesque imperdiet, augue lectus consectetur dolor, sit amet eleifend eros turpis quis dui. Mauris rhoncus, diam et efficitur vehicula, mi tortor auctor lectus, id molestie lacus velit sit amet ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet lectus magna. Aliquam eget ligula vitae dolor ornare aliquet. Proin sit amet aliquet eros, vitae lacinia nisl.</p>
        </div>

        <div className="stats max-w-lg mx-auto">
          <div className="stats__stat stats__stat--purple">
            <div className="stats__main-stat">140%</div>
            increase in...
          </div>

          <div className="stats__stat stats__stat--green">
            <div className="stats__main-stat">1000</div>
            Less hours developing
          </div>

          <div className="stats__stat stats__stat--blue">
            <div className="stats__main-stat">$10,000</div>
            Saved in man hours
          </div>
        </div>

        <section className="h-gap">
          <h1 className="max-w-lg mx-auto text-center my-8 px-4">Some kind of clever call to action that drives people to this button.</h1>

          <div className="text-center">
            <Link
              to="/join"
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

export default IndividualCaseStudy;
