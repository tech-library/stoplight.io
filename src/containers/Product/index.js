import React from 'react';
import { Link } from 'react-static';

import '../../styles/product-page.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="product-hero flex items-stretch">
          <div className="h-diagonal-stripes flex w-full">
            <div className="h-skewed-bg h-skewed-bg--bordered flex items-center w-full px-4">
              <div className="container mx-auto flex">
                <section className="text-white">
                  <h1 className="h-text-5xl mb-8">Stoplight Hosted Docs</h1>

                  <p className="product-hero__info h-text-md mb-8">
                    Because your customers deserve beautiful + functional technical documentation. Check out our help portal, which is 100% powered by this Hosted Docs product.
                  </p>

                  <Link
                    to="/join"
                    title="Signup"
                    className="product-hero__button inline-block h-button text-white font-bold py-2 px-8">
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
              <img className="docs-info__screenshot" src="/images/product-page/docs-hero.png" alt="" />

              <div className="docs-info__content">
                <p className="max-w-sm h-text-md">Combine OpenAPI with Markdown to create robust documentation for internal and external stakeholders. One click publish to host with Stoplight or download the static assets to host anywhere.</p>

                <ul className="docs-info__list pt-2">
                  <li>
                    <img src="/images/rounded-checkmark.svg" alt="check" />
                    Custom Themes
                  </li>
                  <li>
                    <img src="/images/rounded-checkmark.svg" alt="check" />
                    API Playground
                  </li>
                  <li>
                    <img src="/images/rounded-checkmark.svg" alt="check" />
                    Basic Auth
                  </li>
                  <li>
                    <img src="/images/rounded-checkmark.svg" alt="check" />
                    Integrations
                  </li>
                  <li>
                    <img src="/images/rounded-checkmark.svg" alt="check" />
                    Domains + Embedding
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hosting-docs flex items-center">
          <div className="container m-auto">
            <div className="max-w-md mx-auto py-8 text-center">
              <h1 className="mb-8">Interested in Hosted Docs?</h1>

              <p className="mb-8">Basic plan is free for life. Test the complete documention plan for free for the first 14 days.</p>

              <div className="text-center">
                <Link
                  to="/join"
                  className="inline-block h-bg-purple h-button text-white font-bold py-4 px-8 hover:text-white"
                  title="Singup">
                  Singup
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="features container mx-auto h-gap">
          <section className="features__section features__section--reverse">
            <div className="features__col max-w-md p-8">
              <h1 className="mb-8">Layout &amp; Theming</h1>
              <p className="mb-8">Choose between a large or constrained layout and simply pick your colors and we will generate the rest.  Use the CSS editor for further customization.</p>
              <Link to="/join" className="h-bottom-border-link" title="Create your free account">
                Create your free account
              </Link>
            </div>

            <div className="features__col p-8">
              <img src="/images/product-page/layout-and-theming.png" alt="Layout &amp; Theming" />
            </div>
          </section>

          <section className="features__section">
            <div className="features__col p-8">
              <img src="/images/product-page/add-some-basic-options.png" alt="Add Some Basic Options" />
            </div>

            <div className="features__col max-w-md p-8">
              <h1 className="mb-8">Add Some Basic Options</h1>
              <p className="mb-8">Enhance your docs with a gif as a logo and enable mocked responses in the Try it out section.</p>
              <Link to="/join" className="h-bottom-border-link" title="Create your free account">
                Create your free account
              </Link>
            </div>
          </section>

          <section className="features__section features__section--reverse">
            <div className="features__col max-w-md p-8">
              <h1 className="mb-8">Put It All Together</h1>
              <p className="mb-8">Easily protect your docs with a username and password. Turn on Segment, Intercom, or Google Analytics. Then Request user input variables such an API key to be used across your docs.</p>
              <Link to="/join" className="h-bottom-border-link" title="Create your free account">
                Create your free account
              </Link>
            </div>

            <div className="features__col p-8">
              <img src="/images/product-page/put-it-all-together.png" alt="Preview and Publish" />
            </div>
          </section>

          <section className="features__section">
            <div className="features__col p-8">
              <img src="/images/product-page/preview-and-publish.png" alt="Preview and Publish" />
            </div>

            <div className="features__col max-w-md p-8">
              <h1 className="mb-8">Preview and Publish</h1>
              <p className="mb-8">View your docs before publishing. Then implement it either by hosting on our domain, your own custom domain, or embed to another website.</p>
              <Link to="/join" className="h-bottom-border-link" title="Create your free account">
                Create your free account
              </Link>
            </div>
          </section>
        </div>

        <section className="sm:hidden bg-blue-lightest py-8 px-4">
          <h1 className="text-center mb-8 mt-2">Documentation Plans</h1>
          <p className="text-center h-text-md pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <table className="pricing mx-auto my-8">
            <tbody>
              <tr>
                <th>&nbsp;</th>
                <th>
                  <div className="pricing__plan">Basic</div>
                  <div className="pricing__price">Free</div>
                </th>
                <th>
                  <div className="pricing__plan">Standard</div>
                  <div className="pricing__price">$159 / mo</div>
                  <div>10 Domains</div>
                </th>
                <th>
                  <div className="pricing__plan">Standard</div>
                  <div className="pricing__price">$159 / mo</div>
                  <div>10 Domains</div>
                </th>
                <th>
                  <div className="pricing__plan">Pro</div>
                  <div className="pricing__price">$159 / mo</div>
                  <div>Unlimited Domains</div>
                </th>
              </tr>
              <tr>
                <td>OpenAPI, Markdown, Request Maker</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>Unlimited Visits</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>Publish to docs.stoplight.io</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>Publish to your domain</td>
                <td>&nbsp;</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>Theming</td>
                <td>&nbsp;</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>Build history &amp; instant rollbacks</td>
                <td>&nbsp;</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>Custom CSS</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>White label</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>Basic auth &amp; Auth0 integrations</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>Download static HTML/CSS</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>SAML single sign-on</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr>
                <td>HTTP request OAuth token manager</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><img src="/images/rounded-checkmark.svg" alt="check" /></td>
              </tr>
              <tr className="pricing__last-row">
                <td colSpan="5">
                  <Link to="#" className="pricing__action-button">
                    Create Your First Docs Hub &rarr;
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="text-center h-text-md pb-8 my-8">*all plans include the free version of the core platform</div>
        </section>

        <div className="py-8 bg-blue-lightest">
          <p className="max-w-lg mx-auto h-text-2xl font-semibold font-bold text-center px-4 my-8">
            Some kind of clever call to action that drives people to this button.
          </p>

          <div className="text-center py-8">
            <Link to="/join" className="inline-block h-bg-purple h-button text-white font-bold py-4 px-8 hover:text-white">
              Signup
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
