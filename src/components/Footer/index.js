import React from 'react';
import { withSiteData, Link } from 'react-static';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ActionBar from '@components/ActionBar';
import Intercom from '@utils/intercom';

const onClickFunctions = {
  intercom: () => {
    if (Intercom.sdk()) {
      Intercom.show();
    }
  },
};

const Footer = ({ footer, actionBar = {} }) => {
  const { groups, social } = footer || {};

  return [
    <ActionBar key="action" {...actionBar} />,

    <footer key="footer" className="bg-black py-8 border-t-4 border-lighten-300">
      <nav className="container mx-auto flex flex-col items-center">
        <div className="py-4">
          <Link to="/">
            <img className="h-16 hover:opacity-75" src="/images/robot-dude.svg" alt="Logo" />
          </Link>
        </div>

        {groups && (
          <div className="flex flex-wrap justify-between py-4 w-1/2 sm:w-full">
            {groups.map((group, index) => {
              return (
                <div key={index}>
                  <div className="font-bold text-grey-light py-2">{group.title}</div>

                  {group.links.map((link, index) => {
                    return (
                      <Link
                        key={index}
                        to={link.href}
                        className="cursor-pointer text-grey hover:text-grey-lighter block py-2"
                        onClick={e => {
                          if (link.onClick && onClickFunctions[link.onClick]) {
                            e.preventDefault();

                            onClickFunctions[link.onClick]();
                          }
                        }}
                      >
                        {link.title}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        <div className="flex py-4">
          {social &&
            social.map((account, index) => {
              return (
                <a
                  key={index}
                  href={account.href}
                  className="mx-4 text-grey hover:text-grey-lighter"
                >
                  <FontAwesomeIcon icon={['fab', account.icon]} size="lg" />
                </a>
              );
            })}
        </div>

        <Link className="block text-grey py-4" to="/">
          &copy; {new Date().getFullYear()} Stoplight
        </Link>
      </nav>
    </footer>,
  ];
};

export default withSiteData(Footer);
