export const siteConfig = {
  name: process.env.APP_NAME,
  description: process.env.APP_DESC,
  ogImage: process.env.APP_OG_IMAGE_URL,
  favicon: process.env.APP_FAVICON_URL,
  content: {
    tagline: process.env.TAGLINE,
    heading: process.env.HEADING,
    description: process.env.DESCRIPTION,
    targetDate: process.env.TARGET_DATE,
  },
} as const;

export type SiteConfig = typeof siteConfig;
