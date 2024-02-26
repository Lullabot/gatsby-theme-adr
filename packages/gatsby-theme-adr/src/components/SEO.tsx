import React, { PropsWithChildren } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export type SEOProps = PropsWithChildren<{
  title?: string;
  description?: string;
}>;

const SEO = ({ title, description, children }: SEOProps) => {
  const {
    siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    image,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : '',
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {children}
    </>
  );
};

export default SEO;
