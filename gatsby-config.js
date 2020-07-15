module.exports = {
  siteMetadata: {
    siteTitle: 'James Cameron',
    siteTitleAlt: 'James Cameron',
    siteDescription: 'James Cameron. Full-stack developer. Brisbane Australia',
    siteLanguage: 'en',
    author: 'James Cameron',
    contact: 'hello@jmscmrn.com',
    siteUrl: 'https://wwww.jmscmrn.com',
    siteImage: '/me.jpg',
    gitHub: 'https://github.com/desruc',
    linkedIn: 'https://www.linkedin.com/in/james-donald-cameron/'
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/assets/img'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-theme-ui'
  ]
};
