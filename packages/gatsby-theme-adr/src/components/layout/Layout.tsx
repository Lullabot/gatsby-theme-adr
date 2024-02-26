import React, {
  PropsWithChildren,
  ReactElement,
  SVGProps,
  useState,
} from 'react';
import {
  AnnotationIcon,
  CollectionIcon,
  HomeIcon,
  MenuAlt2Icon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import AdrsTimeline from '../AdrsTimeline';
import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';
import NarrowSidebar from './NarrowSidebar';
import NarrowSidebarMobile from './NarrowSidebarMobile';
import Footer from './Footer';
import SearchOverlay from '../search/SearchOverlay';
import { SiteMetadata } from '../../types';

const query = graphql`
  query MenuLinks {
    site {
      siteMetadata {
        menuLinks {
          iconName
          name
          uri
        }
        socialLinks {
          iconName
          name
          uri
        }
      }
    }
  }
`;

const icons: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
  HomeIcon,
  CollectionIcon,
  AnnotationIcon,
};
type LayoutProps = PropsWithChildren<Omit<PageProps, 'children'>>;
const Layout = ({ children, uri: pageUri }: LayoutProps): ReactElement => {
  const {
    site: {
      siteMetadata: { menuLinks, socialLinks },
    },
  } = useStaticQuery<{
    site: {
      siteMetadata: {
        menuLinks: SiteMetadata['menuLinks'];
        socialLinks: SiteMetadata['socialLinks'];
      };
    };
  }>(query);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="absolute h-full w-full flex">
        {/* Narrow sidebar */}
        <NarrowSidebar menuLinks={menuLinks} pageUri={pageUri} />

        {/* Mobile menu */}
        <NarrowSidebarMobile
          show={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          onClick={() => setMobileMenuOpen(false)}
          menuLinks={menuLinks}
          callbackfn={({ name, uri, iconName }, index) => {
            const isCurrent = uri === pageUri;
            const LinkIcon =
              icons && iconName ? icons[iconName] ?? HomeIcon : HomeIcon;
            return (
              <Link
                key={index}
                to={uri}
                className={[
                  isCurrent
                    ? 'bg-charcoal-800'
                    : 'hover:bg-charcoal-800 hover:text-white',
                  'group py-2 px-3 rounded-md flex items-center text-sm font-medium uppercase font-sans text-white',
                ].join(' ')}
                aria-current={isCurrent ? 'page' : undefined}
              >
                <LinkIcon
                  className={[
                    isCurrent
                      ? 'text-white'
                      : 'text-red-400 group-hover:text-white',
                    'mr-3 h-6 w-6',
                  ].join(' ')}
                  aria-current={isCurrent ? 'page' : undefined}
                />
                <span>{name}</span>
              </Link>
            );
          }}
        />

        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="w-full">
            <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-charcoal-500 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 flex justify-between px-4 sm:px-6">
                <div className="flex-1 flex">
                  <form
                    className="w-full flex md:ml-0"
                    action="#"
                    method="GET"
                    onSubmit={(event) => {
                      setSearchOpen(true);
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
                      setSearchQuery(event.target[0].value);
                      event.preventDefault();
                    }}
                  >
                    <label htmlFor="search-field" className="sr-only">
                      Search all ADRs
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <SearchIcon
                          className="flex-shrink-0 h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex h-full items-center">
                        <input
                          name="query"
                          id="search-field"
                          className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400"
                          placeholder="Search"
                          type="search"
                          minLength={3}
                        />
                        <button
                          type="submit"
                          className="relative w-1/2 bg-gray-100 border-charcoal-700 rounded-md shadow-sm py-2 ml-6 text-sm font-medium text-charcoal-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8 h-fit"
                        >
                          Search
                        </button>
                      </div>
                      <SearchOverlay
                        open={searchOpen}
                        setOpen={setSearchOpen}
                        query={searchQuery}
                        setQuery={setSearchQuery}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">
            {/* Primary column */}
            <main className="flex-1 overflow-y-auto">{children}</main>
            {/* Secondary column (hidden on smaller screens) */}
            {pageUri.indexOf('/adrs') === 0 ? (
              <></>
            ) : (
              <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto overflow-x-clip xl:block">
                <AdrsTimeline uri={pageUri} />
              </aside>
            )}
          </div>
          <Footer links={menuLinks} socialLinks={socialLinks} />
        </div>
      </div>
    </>
  );
};

export default Layout;
