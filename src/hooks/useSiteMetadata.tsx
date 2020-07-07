import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteUrl
          siteDescription
          siteLanguage
          siteImage
          author
          gitHub
          linkedIn
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
