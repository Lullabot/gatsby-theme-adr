import React, { PropsWithChildren } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadata } from '../types';

const SEO = ({ children }: PropsWithChildren) => {
  const {
    site: {
      siteMetadata: { seo },
    },
  } = useStaticQuery<{ site: { siteMetadata: Partial<SiteMetadata> } }>(
    graphql`
      {
        site {
          siteMetadata {
            seo {
              defaultTitle
              defaultDescription
            }
          }
        }
      }
    `,
  );
  return (
    <>
      <title id="page-title">{seo?.defaultTitle}</title>
      <meta
        id="page-description"
        name="description"
        content={seo?.defaultDescription}
      />
      {/* Ensure pages using this component can override the default values. */}
      {children}
    </>
  );
};

export default SEO;
