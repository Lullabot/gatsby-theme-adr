import React, { PropsWithChildren } from 'react';

import PageTitle from '@lullabot/gatsby-theme-adr/src/components/PageTitle';

import Layout from '@lullabot/gatsby-theme-adr/src/components/layout/Layout';
import { SiteMetadata } from '@lullabot/gatsby-theme-adr/src/types';

import { graphql, PageProps } from 'gatsby';
import AdrStats, {
  AdrStatsProps,
} from '@lullabot/gatsby-theme-adr/src/components/AdrStats';
import SEO from '@lullabot/gatsby-theme-adr/src/components/SEO';

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            tags
            deciders
          }
        }
      }
    }
  }
`;

export const Head = () => <SEO />;

const HomePage = (
  props: PropsWithChildren<
    PageProps<{
      allMdx: { edges: AdrStatsProps['adrs'] };
      site: { siteMetadata: Partial<SiteMetadata> };
    }>
  >,
) => {
  const {
    allMdx: { edges: adrs },
    site: {
      siteMetadata: { title, description },
    },
  } = props.data;
  return (
    <Layout {...props}>
      <PageTitle deck={description} preTitle="ADR">
        {title}
      </PageTitle>
      <section
        aria-labelledby="primary-heading"
        className="min-w-0 flex-1 flex flex-col lg:order-last relative py-16 px-4 xl:px-0 bg-white overflow-hidden font-serif prose lg:prose-xl 1 mx-auto max-w-prose prose-a:text-blue-600 prose-headings:font-sans"
      >
        <AdrStats adrs={adrs} />
        <h2 id="definition-and-purpose">Definition and purpose</h2>
        <blockquote>
          <p>
            An Architectural Decision (AD) is a software design choice that
            addresses a functional or non-functional requirement that is
            architecturally significant. An Architectural Decision Record (ADR)
            captures a single AD, such as often done when writing personal notes
            or meeting minutes; the collection of ADRs created and maintained in
            a project constitutes its decision log.
          </p>
        </blockquote>
        <p>
          An ADR is immutable once accepted, beyond simple fixes and
          improvements that don’t change the substance of the decision.
          Otherwise, only its status can change (i.e., become deprecated or
          superseded). That way, you can become familiar with the whole project
          history just by reading its decision log in chronological order.
          Moreover, maintaining this documentation aims at:
        </p>
        <ul>
          <li>
            🚀 Improving and speeding up the onboarding of a new team member
          </li>
          <li>
            🔭 Avoiding blind acceptance/reversal of a past decision (cf{' '}
            <a href="https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions.html">
              Michael Nygard’s famous article on ADRs
            </a>
            )
          </li>
          <li>🤝 Formalizing the decision process of the team</li>
        </ul>
        <h2 id="usage">Usage</h2>
        <p>
          This website is automatically updated after a change on the{' '}
          <code>main</code> branch of the project’s Git repository. In fact, the
          developers manage this documentation directly with markdown files
          located next to their code, so it is more convenient for them to keep
          it up-to-date. You can browse the ADRs by using the left menu or the
          search bar.
        </p>
        <p>
          The decision process is entirely collaborative and backed by pull
          requests.
        </p>
        <h2 id="more-information">More information</h2>
        <ul>
          <li>
            <a href="https://github.com/thomvaill/log4brains/tree/master#readme">
              Log4brains documentation
            </a>
          </li>
          <li>
            <a href="https://github.com/thomvaill/log4brains/tree/master#-what-is-an-adr-and-why-should-you-use-them">
              What is an ADR and why should you use them
            </a>
          </li>
          <li>
            <a href="https://adr.github.io/">ADR GitHub organization</a>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default HomePage;
