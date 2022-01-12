import React, { ReactElement } from 'react';

import { MenuLink } from './Layout';
import { Link } from 'gatsby';
import { SocialIcon } from 'react-social-icons';
import Copyright from './Copyright';

type FooterProps = { links: MenuLink[]; socialLinks: MenuLink[] };
const Footer = ({ links, socialLinks }: FooterProps): ReactElement => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto xl:py-6 xl:px-4 py-4 px-2 overflow-hidden sm:px-6 lg:px-8 flex">
        <nav
          className="hidden lg:flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {links.map(({ name, uri }) => (
            <div key={name} className="hidden xl:block px-5">
              <Link
                to={uri}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="xl:ml-6 ml-3 hidden sm:flex justify-center space-x-6">
          {socialLinks.map(({ name, uri, iconName }) => {
            return (
              <span key={name} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{name}</span>
                <SocialIcon
                  url={uri}
                  bgColor="#DDDDDD"
                  style={{ height: 25, width: 25 }}
                  network={iconName || undefined}
                />
              </span>
            );
          })}
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
