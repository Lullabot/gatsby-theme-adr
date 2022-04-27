import {
  AnnotationIcon,
  CollectionIcon,
  HomeIcon,
} from '@heroicons/react/outline';
import { Link } from 'gatsby';
import React, { SVGProps } from 'react';

type SidebarLinkProps = {
  to: string;
  current: boolean;
  name: string;
  iconName: string | undefined;
};

const icons: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
  HomeIcon,
  CollectionIcon,
  AnnotationIcon,
};

export default function SidebarLink({
  to,
  current,
  name,
  iconName,
}: SidebarLinkProps) {
  const LinkIcon = iconName ? icons[iconName] ?? HomeIcon : HomeIcon;
  return (
    <Link
      to={to}
      className={[
        current ? 'bg-charcoal-800' : 'hover:bg-charcoal-800 hover:text-white',
        'group w-full p-3 rounded-md flex flex-col items-center text-xs xl:text-sm font-medium uppercase font-sans text-white',
      ].join(' ')}
      aria-current={current ? 'page' : undefined}
    >
      <LinkIcon
        className={[
          current ? 'text-white' : 'text-red-400 group-hover:text-white',
          'h-6 xl:h-10 xl:w-10 w-6',
        ].join(' ')}
        aria-current={current ? 'page' : undefined}
      />
      <span className="mt-2">{name}</span>
    </Link>
  );
}
