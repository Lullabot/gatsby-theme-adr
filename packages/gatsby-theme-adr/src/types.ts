export type SeoData = {
  defaultTitle: string;
  defaultDescription: string;
};
type IconLink = {
  name: string;
  uri: string;
  iconName?: string;
};
export type IconLinks = Array<IconLink>;

export type SiteMetadata = {
  siteUrl: string;
  title: string;
  seo: SeoData;
  menuLinks: IconLinks;
  socialLinks: IconLinks;
};
