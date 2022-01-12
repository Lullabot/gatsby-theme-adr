import React from 'react';
import { Link } from 'gatsby';

export type AdrStatsProps = {
  adrs: {
    node: {
      frontmatter: {
        deciders?: string[];
        tags?: string[];
      };
    };
  }[];
  to?: string;
};
export default function AdrStats({ adrs, to }: AdrStatsProps) {
  const stats = [
    { name: 'ADRs', stat: adrs.length },
    {
      name: 'Collaborators',
      stat: adrs.reduce((unique, adr) => {
        (adr.node.frontmatter.deciders || []).forEach((decider) =>
          unique.add(decider.toLowerCase()),
        );
        return unique;
      }, new Set()).size,
    },
    {
      name: 'Disciplines',
      stat: adrs.reduce((unique, adr) => {
        (adr.node.frontmatter.tags || []).forEach((decider) =>
          unique.add(decider.toLowerCase()),
        );
        return unique;
      }, new Set()).size,
    },
  ];
  return (
    <div className="container mb-5 mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map(({ name, stat }) => (
          <Link
            to={to ? to : '/adrs'}
            key={name}
            className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 no-underline"
          >
            <dt className="text-sm font-medium text-gray-500 truncate">
              {name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              <span className="font-bold">{stat}</span>
            </dd>
          </Link>
        ))}
      </dl>
    </div>
  );
}
