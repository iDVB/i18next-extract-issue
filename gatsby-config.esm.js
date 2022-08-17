import { DEFAULT_LOCALE, LOCALES } from './languages'

const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'Name',
      short_name: 'short name',
      start_url: `/`,
      background_color: `#000000`,
      theme_color: `#0343fb`,
      display: `minimal-ui`
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/locales`,
      name: `locale`,
    },
  },
  {
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
      languages: Object.keys(LOCALES),
      defaultLanguage: DEFAULT_LOCALE,
      fallbackLanguage: DEFAULT_LOCALE,
      // if you are using Helmet, you must include siteUrl, and make sure you add http:https
      siteUrl: 'https://domain.com',
      i18nextOptions: {
        debug: process.env.NODE_ENV === 'development',
        defaultNS: 'common',
        saveMissing: false,
        interpolation: {
          escapeValue: false, // not needed for react as it escapes by default
        },
        nsSeparator: false,
      },
    },
  },
  `gatsby-plugin-remove-trailing-slashes`
]

const config = {
  pathPrefix: 'https://domain.com',
  plugins,
  flags: {
    DEV_SSR: false,
  },
}

export default config
