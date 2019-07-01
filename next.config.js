const withSass = require('@zeit/next-sass')
module.exports = withSass({
  target: 'serverless',
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'frontmatter-markdown-loader'
      }
    )
    return config;
  }
})