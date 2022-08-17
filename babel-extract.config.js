const { LOCALES, DEFAULT_LOCALE } = require('./languages')

process.env.NODE_ENV = 'test'

module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      'i18next-extract',
      {
        keySeparator: null,
        nsSeparator: null,
        locales: Object.keys(LOCALES),
        keyAsDefaultValue: [DEFAULT_LOCALE],
        useI18nextDefaultValue: [DEFAULT_LOCALE],
        discardOldKeys: true,
        defaultNS: 'common',
        outputPath: 'locales/{{locale}}/{{ns}}.json',
        customTransComponents: [['gatsby-plugin-react-i18next', 'Trans']],
      },
    ],
  ],
}
