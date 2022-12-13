import React, { PropsWithChildren } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export type SEOProps = PropsWithChildren<{
  title?: string;
  description?: string;
  pathname?: string;
}>;

const SEO = ({ title, description, pathname, children }: SEOProps) => {
  const {
    siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    twitterUsername,
    image,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : '',
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};

export default SEO;
