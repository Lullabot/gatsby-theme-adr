import React, { ReactElement, SVGProps } from 'react';
import { Link } from 'gatsby';
import { MenuLink } from './Layout';
import {
  CollectionIcon,
  HomeIcon,
  AnnotationIcon,
} from '@heroicons/react/outline';
import NarrowSidebarLogo from './NarrowSidebarLogo';
import NarrowSidebarTitle from './NarrowSidebarTitle';

const icons: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
  HomeIcon,
  CollectionIcon,
  AnnotationIcon,
};
type NarrowSidebarProps = {
  menuLinks: MenuLink[];
  pageUri: string;
};

const NarrowSidebar = ({
  menuLinks,
  pageUri,
}: NarrowSidebarProps): ReactElement => (
  <div className="hidden w-28 xl:w-36 bg-charcoal-700 overflow-y-auto md:block">
    <div className="w-full py-6 flex flex-col items-center">
      <div className="flex-shrink-0 flex items-center">
        <NarrowSidebarLogo />
      </div>
      <NarrowSidebarTitle />
      <div className="flex-1 mt-6 w-full px-2 space-y-1">
        {menuLinks.map(({ name, uri, iconName }, i: number) => {
          const isCurrent = uri === pageUri;
          const LinkIcon = iconName ? icons[iconName] ?? HomeIcon : HomeIcon;
          return (
            <Link
              key={i}
              to={uri}
              className={[
                isCurrent
                  ? 'bg-charcoal-800'
                  : 'hover:bg-charcoal-800 hover:text-white',
                'group w-full p-3 rounded-md flex flex-col items-center text-xs xl:text-sm font-medium uppercase font-sans text-white',
              ].join(' ')}
              aria-current={isCurrent ? 'page' : undefined}
            >
              <LinkIcon
                className={[
                  isCurrent
                    ? 'text-white'
                    : 'text-red-400 group-hover:text-white',
                  'h-6 xl:h-10 xl:w-10 w-6',
                ].join(' ')}
                aria-current={isCurrent ? 'page' : undefined}
              />
              <span className="mt-2">{name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

export default NarrowSidebar;
