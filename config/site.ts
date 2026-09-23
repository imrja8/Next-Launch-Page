export const siteConfig = {
  get name() {
    return process.env.APP_NAME;
  },
  get description() {
    return process.env.APP_DESC;
  },
  get ogImage() {
    return process.env.APP_OG_IMAGE_URL;
  },
  get favicon() {
    return process.env.APP_FAVICON_URL;
  },
  get content() {
    return {
      tagline: process.env.TAGLINE,
      taglineIcon: process.env.TAGLINE_ICON,
      heading: process.env.HEADING,
      description: process.env.DESCRIPTION,
      targetDate: process.env.TARGET_DATE,
    };
  },
};

export type SiteConfig = typeof siteConfig;

