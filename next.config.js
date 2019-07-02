const withSass = require('@zeit/next-sass')
const withMDX = require('@next/mdx')

module.exports = withSass(withMDX({
  extension: /\.md$/
})({
  target: 'serverless',
  pageExtensions: ['js', 'md']
}))