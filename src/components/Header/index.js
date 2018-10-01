import React from 'react';
import cn from 'classnames';
import { withSiteData, Link } from 'react-static';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Popup, Portal } from '@stoplight/ui';

import Intercom from '@utils/intercom';

export const headerHeightClass = 'h-20';

const onClickFunctions = {
  intercom: () => {
    if (Intercom.sdk()) {
      Intercom.show();
    }
  },
};

const DropdownItem = (item, index) => {
  return (
    <Link
      key={index}
      to={item.href}
      className={cn('flex px-3 text-black hover:opacity-75 cursor-pointer', {
        'pt-6': index > 0,
      })}
      onClick={e => {
        if (item.onClick && onClickFunctions[item.onClick]) {
          e.preventDefault();

          onClickFunctions[item.onClick]();
        }
      }}
    >
      <div className={cn('flex items-center', item.subtitle ? 'w-12 mr-6' : 'w-8 mr-3')}>
        {item.icon && (
          <FontAwesomeIcon
            className={cn(item.titleColor && `text-${item.titleColor}`)}
            icon={['fas', item.icon.name]}
            size={item.subtitle ? '2x' : 'lg'}
          />
        )}
      </div>

      <div className="flex-1">
        <div className={cn('text-lg font-bold', item.titleColor && `text-${item.titleColor}`)}>
          {item.title}
        </div>

        {item.subtitle && <div className="text-base opacity-75">{item.subtitle}</div>}
      </div>
    </Link>
  );
};

const HeaderDropdown = ({ width, title, items }) => {
  if (!items || !items.length) return null;

  return (
    <Popup
      width={width}
      posX="center"
      posY="bottom"
      renderTrigger={attributes => (
        <div
          className="flex select-none cursor-pointer ml-3 text-white hover:opacity-85 hover:text-white py-2 px-4 mx-2"
          {...attributes}
        >
          <div className="flex-1 mr-2">{title}</div>
        </div>
      )}
      renderContent={() => (
        <div className="bg-white rounded-lg shadow-lg p-6">{items.map(DropdownItem)}</div>
      )}
    />
  );
};

const Desktop = ({ products, resources, company }) => {
  return [
    <div key="1" className="sm:hidden flex flex-1 justify-end items-center text-lg">
      <HeaderDropdown width={400} title="Products" items={products} />

      <HeaderDropdown width={350} title="Resources" items={resources} />

      <HeaderDropdown width={250} title="Company" items={company} />

      <Link to="/pricing" className="text-white hover:opacity-85 hover:text-white py-2 px-4 mx-2">
        Pricing
      </Link>
    </div>,

    <Link
      key="2"
      to="https://next.stoplight.io/login"
      className="sm:hidden text-lg text-white hover:opacity-85 hover:text-white py-4 pl-4 pr-2 ml-8 flex items-center"
    >
      Sign in <FontAwesomeIcon icon={['fas', 'arrow-right']} className="ml-3" />
    </Link>,
  ];
};

class Mobile extends React.Component {
  state = {
    showMenu: false,
  };

  render() {
    const { products, resources = [], company = [] } = this.props;
    const { showMenu } = this.state;

    const items = resources.concat(company);

    return (
      <div className="hidden sm:flex flex-1 justify-end">
        <FontAwesomeIcon
          icon={['fas', 'bars']}
          className="cursor-pointer ml-3 text-white"
          size="2x"
          onClick={() => this.setState({ showMenu: true })}
        />

        {showMenu && (
          <Portal>
            <div className="absolute pin z-10">
              <div
                className="relative m-4 pt-6 bg-white rounded"
                onClick={() => this.setState({ showMenu: false })}
              >
                <div className="px-6">
                  <div className="absolute pin-t pin-r p-4 flex items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'times']}
                      className="cursor-pointer text-grey"
                      size="lg"
                      onClick={() => this.setState({ showMenu: false })}
                    />
                  </div>

                  {products && (
                    <div className="text-md">
                      <div className="pb-3 uppercase font-bold text-grey-darker">Products</div>
                      <div className="flex flex-wrap">
                        {products.map((product, index) => {
                          return (
                            <Link
                              key={index}
                              to={product.href}
                              className="w-full flex items-center text-black py-4"
                              onClick={e => {
                                if (product.onClick && onClickFunctions[product.onClick]) {
                                  e.preventDefault();

                                  onClickFunctions[product.onClick]();
                                }
                              }}
                            >
                              {product.icon && (
                                <FontAwesomeIcon
                                  className={cn(product.titleColor && `text-${product.titleColor}`)}
                                  icon={['fas', product.icon.name]}
                                  // size="sm"
                                />
                              )}

                              <div className="flex-1 ml-3">
                                <div
                                  className={cn(
                                    'font-bold',
                                    product.titleColor && `text-${product.titleColor}`
                                  )}
                                >
                                  {product.title}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap border-t mt-4 py-4 font-bold text-black text-md">
                    <Link to="/pricing" className="w-1/2 py-3">
                      Pricing
                    </Link>

                    {items &&
                      items.map((item, index) => {
                        return (
                          <Link
                            key={index}
                            to={item.href}
                            className="w-1/2 py-3"
                            onClick={e => {
                              if (item.onClick && onClickFunctions[item.onClick]) {
                                e.preventDefault();

                                onClickFunctions[item.onClick]();
                              }
                            }}
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                  </div>
                </div>

                {/* <Link
                to="https://next.stoplight.io/login"
                className="w-full block px-6 py-3 bg-grey-lighter text-md font-bold"
              >
                Sign in <FontAwesomeIcon icon={['fas', 'arrow-right']} className="ml-3" />
              </Link> */}
              </div>
            </div>
          </Portal>
        )}
      </div>
    );
  }
}

const Header = ({ header }) => {
  const { products, resources, company } = header || {};

  return (
    <header className="absolute z-10 pin-t pin-l pin-r">
      <div className="container">
        <nav className={cn(headerHeightClass, 'flex items-center')}>
          <Link to="/" className="text-white hover:opacity-75 hover:text-white text-2xl font-bold">
            Stoplight
          </Link>

          <Desktop products={products} resources={resources} company={company} />

          <Mobile products={products} resources={resources} company={company} />
        </nav>
      </div>
    </header>
  );
};

export default withSiteData(Header);
