module.exports = {
  siteMetadata: {
    siteTitle: 'James Cameron',
    siteTitleAlt: 'James Cameron',
    siteDescription:
      "I'm a full-stack developer based in Brisbane, Australia. This site shows off some of the awesome things I've built!",
    siteLanguage: 'en',
    author: 'James Cameron',
    contact: 'jdonaldcameron@gmail.com',
    siteUrl: 'https://wwww.jmscmrn.com',
    siteImage: '/title.png',
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
    'gatsby-plugin-react-helmet'
  ]
};
