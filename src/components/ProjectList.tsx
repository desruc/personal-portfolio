/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

import ProjectCard from './ProjectCard';

const ProjectList = () => (
  <Box
    id="projects"
    sx={{ paddingTop: 88, '&:hover': { '.project-card': { opacity: 0.5 } } }}
  >
    <ProjectCard
      link="https://github.com/desruc/discord-bot"
      title="Discord Bot"
      description="Everything you'd need in a discord bot. News, Moderation, Memes, an RPG and more!"
      stack={['typescript', 'mongodb']}
    />
    <ProjectCard
      link="https://github.com/desruc/gatsby-theme-coding-blog"
      title="Gatsby theme coding blog"
      description="A feature rich blogging theme. Includes tags/categories support, three colour schemes and code block formatting."
      stack={['typescript', 'gatsby.js']}
    />
  </Box>
);

export default ProjectList;
