import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadata } from '../types';

export const useSiteMetadata = () => {
  const data = useStaticQuery<{ site: { siteMetadata: SiteMetadata } }>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
          menuLinks {
            name
            uri
            iconName
          }
          socialLinks {
            name
            uri
            iconName
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
