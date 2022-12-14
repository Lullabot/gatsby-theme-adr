type IconLink = {
  name: string;
  uri: string;
  iconName?: string;
};
export type IconLinks = IconLink[];

export type SiteMetadata = {
  siteUrl: string;
  title: string;
  image?: string;
  description?: string;
  twitterUsername?: string;
  menuLinks: IconLinks;
  socialLinks: IconLinks;
};
