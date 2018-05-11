module.exports = {
  siteMetadata: {
    title: 'Burmese Recipes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Rubik\:900',
          'Roboto Mono'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ],
}
