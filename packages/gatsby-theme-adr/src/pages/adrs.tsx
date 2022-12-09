import React, { PropsWithChildren } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { CalendarIcon, TagIcon, UsersIcon } from '@heroicons/react/solid';
import AdrStats from '../components/AdrStats';
import Layout from '../components/layout/Layout';
import StatusBadge from '../components/StatusBadge';
import ReactMarkdown from 'react-markdown';
import PageTitle from '../components/PageTitle';

export type AdrListingData = {
  node: {
    fields: { slug: string };
    frontmatter: {
      date: string;
      deciders?: string[];
      tags?: string[];
      title: string;
      status: 'accepted' | 'deprecated';
      deck?: string;
    };
  };
};

type AdrListingType = PropsWithChildren<
  PageProps<
    {
      allMdx: {
        edges: AdrListingData[];
      };
    },
    { tag?: string }
  >
>;
const AdrListing = (props: AdrListingType) => {
  const {
    data: {
      allMdx: { edges: allAdrs },
    },
    pageContext: { tag },
  } = props;
  return (
    <Layout {...props}>
      <PageTitle preTitle="">
        {tag ? `ADRs tagged "${tag}"` : 'All ADRs'}
      </PageTitle>
      <div className="max-w-4xl mx-auto">
        <AdrStats adrs={allAdrs} to={tag ? `/adrs/${tag}` : '/adrs'} />
      </div>
      <div className="sm:rounded-md max-w-prose mx-auto">
        <ul className="shadow divide-y divide-gray-200">
          {allAdrs.map(
            (
              {
                node: {
                  frontmatter: { date, deciders, tags, title, status, deck },
                  fields: { slug },
                },
              },
              i,
            ) => (
              <li key={i}>
                <div className="block px-4 py-4 sm:px-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <Link to={slug}>
                      <h2 className="text-sm font-semibold text-indigo-600 truncate">
                        {title}
                      </h2>
                    </Link>
                    <div className="ml-2 flex-shrink-0 flex">
                      <StatusBadge status={status} size="small" />
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      {deciders && deciders.length ? (
                        <p
                          className="flex items-center text-sm text-gray-500"
                          title={deciders.join(', ')}
                        >
                          <UsersIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium">
                            {deciders.length === 1
                              ? '1 decider'
                              : `${deciders.length} deciders`}
                          </span>
                        </p>
                      ) : (
                        <></>
                      )}
                      {tags && tags.length ? (
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <TagIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {tags.join(', ')}
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <CalendarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <p>
                        Decided on <time dateTime={date}>{date}</time>
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm mt-3 font-serif prose">
                    <ReactMarkdown>{deck || ''}</ReactMarkdown>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AllAdrs($tag: String) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            tags
            deciders
            status
            deck
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default AdrListing;
