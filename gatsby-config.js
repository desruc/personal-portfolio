module.exports = {
  siteMetadata: {
    siteTitle: 'James Cameron | Software Engineer',
    siteTitleAlt: 'James Cameron',
    siteDescription:
      'James Cameron is a software engineer based in Brisbane, Australia; who specializes in building exceptional websites, applications, and everything in between.',
    siteLanguage: 'en',
    author: 'James Cameron',
    contact: 'jdonaldcameron@gmail.com',
    siteUrl: 'https://jmscmrn.com',
    siteImage: '/jmscmrn.jpg',
    gitHub: 'https://github.com/desruc',
    linkedIn: 'https://www.linkedin.com/in/james-donald-cameron/'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Ubuntu',
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
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' }
      }
    }
  ]
};
