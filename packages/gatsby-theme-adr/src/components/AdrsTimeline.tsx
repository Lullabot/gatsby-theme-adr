import React from 'react';
import { BanIcon, CheckCircleIcon } from '@heroicons/react/outline';
import { graphql, Link, useStaticQuery } from 'gatsby';
import TagList from './TagList';

const query = graphql`
  query LatestAdrs {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 8) {
      edges {
        node {
          frontmatter {
            date(fromNow: true)
            title
            tags
            status
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
export type AdrTimelineData = {
  node: {
    frontmatter: {
      date: string;
      title: string;
      tags?: string[];
      status: string;
    };
    fields: { slug: string };
  };
};
type AdrsTimelineProps = {
  uri: string;
};
export default function AdrsTimeline({ uri }: AdrsTimelineProps) {
  const {
    allMdx: { edges: allAdrs },
  } = useStaticQuery<{
    allMdx: {
      edges: AdrTimelineData[];
    };
  }>(query);
  return (
    <div>
      <h2 className="px-4 pt-2 block text-base text-xs text-charcoal-700 tracking-wide uppercase">
        Accepted ADRs
      </h2>
      <ul className="divide-y divide-gray-200">
        {allAdrs.map(
          (
            {
              node: {
                frontmatter: { date, title, tags, status },
                fields: { slug },
              },
            },
            i,
          ) => (
            <li
              key={i}
              className={[
                'p-4',
                uri === slug.replace(/\/$/, '') ? 'bg-gray-100' : null,
              ]
                .join(' ')
                .trim()}
            >
              <div className="flex">
                {status === 'deprecated' ? (
                  <BanIcon className="h-6 w-6 text-red-400 shrink-0" />
                ) : (
                  <CheckCircleIcon className="h-6 w-6 text-blue-500 shrink-0" />
                )}
                <div className="basis-full space-y-1 pl-2">
                  <h3 className="text-sm font-medium font-sans">
                    <Link to={slug}>{title}</Link>
                  </h3>
                  <div className="flex justify-between">
                    {tags ? <TagList tags={tags} /> : <></>}
                    <p className="text-sm text-gray-500 whitespace-nowrap">
                      {date}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ),
        )}
        <li key="last" className="p-4 pb-2 text-center text-blue-500">
          <Link to="/adrs">See all</Link>
        </li>
      </ul>
    </div>
  );
}
