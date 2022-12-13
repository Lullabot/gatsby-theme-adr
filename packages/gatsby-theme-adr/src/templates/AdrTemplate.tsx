import React, { ReactElement, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import PageBreadcrumbs from '../components/PageBreadcrumbs';
import AdrToc from '../components/AdrToc';
import { CalendarIcon, TagIcon, UsersIcon } from '@heroicons/react/solid';
import TagList from '../components/TagList';
import Layout from '../components/layout/Layout';
import { graphql, HeadProps, PageProps } from 'gatsby';
import StatusBadge from '../components/StatusBadge';
import Pager from '../components/Pager';
import ReactMarkdown from 'react-markdown';
import { highlightCode } from '../util/highlight';
import SEO from '../components/SEO';

export type AdrFrontmatter = {
  date: string;
  deciders?: string[];
  status: 'accepted' | 'deprecated';
  tags?: string[];
  title: string;
  deck?: string;
};

type ContextType = {
  title: string;
  deck: string;
  id: string;
  nextAdrId: string;
  previousAdrId: string;
};
type DataType = { mdx: { frontmatter: AdrFrontmatter; body: string } };

export const Head = ({
  data: {
    mdx: {
      frontmatter: { title, deck },
    },
  },
}: HeadProps<DataType, ContextType>) => (
  <SEO title={title} description={deck} />
);

const AdrTemplate = (props: PageProps<DataType, ContextType>): ReactElement => {
  const { uri, data } = props;
  const {
    frontmatter: { date, deciders, status, tags, title, deck },
    body,
  } = data.mdx;
  const { id } = props.pageContext;

  useEffect(() => {
    highlightCode();
  }, [body]);
  return (
    <Layout {...props}>
      <PageBreadcrumbs uri={uri} title={title} />
      <PageTitle preTitle="Decision">{title}</PageTitle>
      <div className="mx-4 md:mx-16">
        <div className="text-center mt-8">
          <StatusBadge status={status} size="large" />
        </div>
        <section
          aria-labelledby="primary-heading"
          className="relative flex-1 flex flex-col bg-white font-serif"
        >
          {deck ? (
            <div className="text-3xl italic mt-8 mx-auto prose">
              <ReactMarkdown>{deck || ''}</ReactMarkdown>
            </div>
          ) : (
            <></>
          )}
          <div className="relative mt-16 md:flex md:flex-wrap md:justify-center md:gap-8">
            <div className="">
              <div className="sticky top-4 lg:max-w-xs">
                <AdrToc id={id} />
              </div>
            </div>
            <div className="mt-8 lg:mt-0 prose lg:prose-xl prose-a:text-blue-600 prose-headings:font-sans prose-code:before:content-none prose-code:after:content-none">
              {props.children}
            </div>
          </div>
          <Pager uri={uri} />
        </section>
        <hr className="mt-8" />
        <div className="max-w-prose mx-auto my-8">
          {deciders ? (
            <p className="my-2 flex items-center text-sm text-gray-500">
              <UsersIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">{deciders.join(', ')}</span>
            </p>
          ) : (
            <></>
          )}
          <div className="my-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <p>
              Decided on <time dateTime={date}>{date}</time>
            </p>
          </div>
          {tags?.length ? (
            <div className="my-2 flex items-center text-sm text-gray-500">
              <TagIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <TagList tags={tags} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AdrPage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(locale: "en-US", formatString: "dddd, MMMM Do YYYY")
        deciders
        status
        tags
        title
        deck
      }
      body
    }
  }
`;

export default AdrTemplate;
