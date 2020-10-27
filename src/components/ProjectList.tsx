/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui';

import { useStaticQuery, graphql } from 'gatsby';

import FeaturedProjectCard from './FeaturedProjectCard';

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    query {
      unwrappedImage: file(relativePath: { eq: "unwrapped.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      keepcloneImage: file(relativePath: { eq: "keepclone.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage: file(relativePath: { eq: "blog.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discordImage: file(relativePath: { eq: "discord.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box
      id="projects"
      sx={{
        pt: 40,
        pb: 40,
        '@media (min-width: 992px)': { pb: 0, pt: 40 },
        '@media (min-width:1280px)': { pt: 88 }
      }}
    >
      <Heading sx={{ variant: 'heading.section' }}>01. Projects</Heading>
      <Box>
        <FeaturedProjectCard
          gitHubLink="https://github.com/desruc/spotify-unwrapped"
          externalLink="https://unwrapped.jmscmrn.com"
          title="Spotify Unwrapped"
          description="A React app for visualizing your Spotify data! View your top artists, tracks, and albums; as well as a detailed breakdown of each track."
          stack={['react', 'styled-components']}
          image={data.unwrappedImage.childImageSharp.fluid}
        />
        <FeaturedProjectCard
          gitHubLink="https://github.com/desruc/keepclone"
          externalLink="https://keepclone.jmscmrn.com"
          title="keepclone"
          description="A Google Keep clone built with React, Material-UI and Firebase. Includes labels, drag-and-drop and dark mode!"
          stack={['react', 'material-ui', 'firebase']}
          image={data.keepcloneImage.childImageSharp.fluid}
        />
        <FeaturedProjectCard
          gitHubLink="https://github.com/desruc/gatsby-theme-coding-blog"
          externalLink="https://blog.jmscmrn.com"
          title="Coding Blog"
          description="A feature rich blogging theme. Includes tags/categories support, three colour schemes and code block formatting."
          stack={['typescript', 'gatsby.js']}
          image={data.blogImage.childImageSharp.fluid}
        />
        <FeaturedProjectCard
          gitHubLink="https://github.com/desruc/discord-bot"
          title="Discord Bot"
          description="Everything you'd need in a discord bot. News, Moderation, Memes, an RPG and more!"
          stack={['typescript', 'mongodb']}
          image={data.discordImage.childImageSharp.fluid}
        />
      </Box>
    </Box>
  );
};

export default ProjectList;
