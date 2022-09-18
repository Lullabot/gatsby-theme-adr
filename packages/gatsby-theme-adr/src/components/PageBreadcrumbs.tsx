import React, { ReactElement } from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';

type PageBreadcrumbsProps = { uri: string; title: string };
const PageBreadcrumbs = ({
  uri,
  title,
}: PageBreadcrumbsProps): ReactElement => {
  const pages = [
    { name: 'ADRs', href: '/adrs', current: false },
    { name: title, href: uri, current: true },
  ];
  return (
    <nav className="flex p-3 bg-white" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <a href="/" className="text-charcoal-700 hover:text-charcoal-800">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-charcoal-700"
                aria-hidden="true"
              />
              <Link
                to={page.href}
                className="ml-4 text-sm font-medium text-charcoal-700 hover:text-charcoal-800"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default PageBreadcrumbs;
