/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui';

import ProjectCard from './ProjectCard';

const ProjectList = () => (
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
    <Box sx={{ '&:hover': { '.project-card': { opacity: 0.5 } } }}>
      <ProjectCard
        link="https://github.com/desruc/discord-bot"
        title="Discord Bot"
        description="Everything you'd need in a discord bot. News, Moderation, Memes, an RPG and more!"
        stack={['typescript', 'mongodb']}
      />
      <ProjectCard
        link="https://github.com/desruc/gatsby-theme-coding-blog"
        title="Coding Blog"
        description="A feature rich blogging theme. Includes tags/categories support, three colour schemes and code block formatting."
        stack={['typescript', 'gatsby.js']}
      />
      <ProjectCard
        link="https://github.com/desruc/personal-portfolio"
        title="Personal Portfolio"
        description="Where you are right now! A Gatsby.js site written in TypeScript."
        stack={['typescript', 'gatsby.js']}
      />
    </Box>
  </Box>
);

export default ProjectList;
