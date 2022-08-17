// https://support.gatsbyjs.com/hc/en-us/articles/1500000294121-Using-ES6-Module-Syntax-in-Gatsby-API-Files-on-Gatsby-Cloud
// eslint-disable-next-line
require = require('esm')(module)
module.exports = require('./gatsby-config.esm.js')
