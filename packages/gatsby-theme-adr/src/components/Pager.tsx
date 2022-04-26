import React, { ReactElement } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const query = graphql`
  query Pager {
    allMdx {
      edges {
        next {
          slug
          frontmatter {
            title
          }
        }
        previous {
          slug
          frontmatter {
            title
          }
        }
        node {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

type PagerProps = { uri: string };
type SlugAndTitle = { slug: string; frontmatter: { title: string } };
const Pager = ({ uri }: PagerProps): ReactElement => {
  const {
    allMdx: { edges },
  } = useStaticQuery<{
    allMdx: {
      edges: {
        next: SlugAndTitle | null;
        previous: SlugAndTitle | null;
        node: SlugAndTitle;
      }[];
    };
  }>(query);
  const edge = edges.find(({ node: { slug } }) => `/${slug}` === uri);
  if (!edge) {
    return <></>;
  }
  return (
    <span className="relative z-0 inline-flex rounded-md font-sans justify-center">
      {edge.previous ? (
        <Link
          to={`/${edge.previous.slug}`}
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          {edge.previous.frontmatter.title}
        </Link>
      ) : (
        <></>
      )}
      {edge.next ? (
        <Link
          to={`/${edge.next.slug}`}
          className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          {edge.next.frontmatter.title}
        </Link>
      ) : (
        <></>
      )}
    </span>
  );
};

export default Pager;
