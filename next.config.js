const withSass = require('@zeit/next-sass')
module.exports = {
  target: 'serverless',
  ...withSass()
}