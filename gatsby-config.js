module.exports = {
  siteMetadata: {
    siteTitle: 'JMSCMRN',
    siteTitleAlt: '',
    siteDescription: 'My personal portfolio',
    siteLanguage: 'en',
    author: 'James Cameron',
    contact: 'hello@jmscmrn.com',
    siteUrl: 'https://wwww.jmscmrn.com',
    siteImage: '/siteImage.jpg',
    gitHub: 'https://github.com/desruc',
    linkedIn: 'https://www.linkedin.com'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Rubik',
            variants: [300, 400, 500, 600, 700]
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-theme-ui'
  ]
};
