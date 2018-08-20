import React from 'react';
import { Link } from 'react-static';

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

import { sizes, Icon } from '@stoplight/ui';

import Intercom from '../../utils/intercom';

const Footer = () => {
  return (
    <footer className="site-footer bg-primary-lightest">
      <div className="py-8 border-t">
        <div className="container mx-auto">
          <nav className="flex text-sm text-grey-darker">
            <div className="list-reset flex flex-1 flex-row items-center">
              <span>&copy; 2018 Stoplight</span>
              <span className="mx-2 hidden">|</span>
              <Link href="/terms" className="text-grey-darker hover:text-grey-dark hidden">
                Terms of Service
              </Link>

              <a href="https://twitter.com/stoplightio" className="mr-4 ml-4">
                <div className="rounded-full h-6 w-6 flex items-center justify-center bg-accent-dark text-white">
                  <Icon icon={faTwitter} size={sizes.sm} />
                </div>
              </a>

              <a href="https://www.linkedin.com/company/stoplight/">
                <div className="rounded-full h-6 w-6 flex items-center justify-center bg-accent-dark text-white">
                  <Icon icon={faLinkedinIn} size={sizes.sm} />
                </div>
              </a>
            </div>

            <ul className="list-reset flex flex-row items-center">
              <li className="mr-8">
                <Link href="/" className="text-grey-darker hover:text-grey-dark">
                  Home
                </Link>
              </li>
              <li className="mr-8">
                <a
                  href="https://blog.stoplight.io"
                  className="text-grey-darker hover:text-grey-dark"
                >
                  Blog
                </a>
              </li>
              <li className="mr-8">
                <Link href="/pricing" className="text-grey-darker hover:text-grey-dark">
                  Pricing
                </Link>
              </li>
              <li className="mr-8">
                <a
                  href="http://press.stoplight.io"
                  className="text-grey-darker hover:text-grey-dark"
                >
                  Press
                </a>
              </li>
              <li className="mr-8">
                <a
                  href="https://docs.stoplight.io"
                  className="text-grey-darker hover:text-grey-dark"
                >
                  Docs
                </a>
              </li>
              <li className="mr-8">
                <a
                  href="https://community.stoplight.io"
                  className="text-grey-darker hover:text-grey-dark"
                >
                  Community
                </a>
              </li>
              {Intercom.sdk() && (
                <li className="mr-8">
                  <div
                    onClick={() => Intercom.show()}
                    className="text-grey-darker hover:text-grey-dark"
                  >
                    Chat
                  </div>
                </li>
              )}
              <li className="mr-8">
                <a
                  href="mailto:support@stoplight.io"
                  className="text-grey-darker hover:text-grey-dark"
                >
                  Support
                </a>
              </li>
              <li key="login" className="mr-8">
                <Link
                  href="https://next.stoplight.io/login"
                  className="text-grey-darker hover:text-grey-dark"
                >
                  Login
                </Link>
              </li>
              ,
              <li key="join" className="mr-8">
                <Link
                  href="https://next.stoplight.io/join"
                  className="text-grey-darker hover:text-grey-dark"
                >
                  Join
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
