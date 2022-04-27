import React, { ReactElement } from 'react';
import { MenuLink } from './Layout';
import NarrowSidebarLogo from './NarrowSidebarLogo';
import NarrowSidebarTitle from './NarrowSidebarTitle';
import SidebarLink from './SidebarLink';

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
          return (
            <SidebarLink
              key={i}
              to={uri}
              current={isCurrent}
              name={name}
              iconName={iconName}
            />
          );
        })}
      </div>
    </div>
  </div>
);

export default NarrowSidebar;
