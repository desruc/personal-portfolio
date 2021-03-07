/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box } from 'theme-ui';
import { useTrail, animated } from 'react-spring';
import ProjectCard from './ProjectCard';

const projects = [
  {
    link: 'https://github.com/desruc/discord-bot',
    title: 'Discord Bot',
    description:
      "Everything you'd need in a discord bot. News, Moderation, Memes, an RPG and more!",
    stack: ['typescript', 'mongodb']
  },
  {
    link: 'https://github.com/desruc/gatsby-theme-coding-blog',
    title: 'Coding Blog',
    description:
      'A feature rich blogging theme. Includes tags/categories support, three colour schemes and code block formatting.',
    stack: ['typescript', 'gatsby.js']
  },
  {
    link: 'https://github.com/desruc/personal-portfolio',
    title: 'Personal Portfolio',
    description:
      'Where you are right now! A Gatsby.js site written in TypeScript.',
    stack: ['typescript', 'gatsby.js']
  }
];

const MoreProjects = () => {
  const [open, setOpen] = useState(false);

  const toggleShowMore = () => setOpen(!open);

  const animations = useTrail(projects.length, {
    from: { opacity: open ? 0 : 1 },
    to: { opacity: open ? 1 : 0 }
  });

  return (
    <section>
      <Box sx={{ display: open ? 'block' : 'none', pt: 4 }}>
        {animations.map((style, idx) => (
          <animated.div key={projects[idx].title} style={style}>
            <ProjectCard
              link={projects[idx].link}
              title={projects[idx].title}
              description={projects[idx].description}
              stack={projects[idx].stack}
            />
          </animated.div>
        ))}
      </Box>
      <Box sx={{ pt: open ? 4 : 5, textAlign: 'center' }}>
        <Box
          onClick={toggleShowMore}
          sx={{
            pt: 2,
            pb: 2,
            pl: 3,
            pr: 3,
            variant: 'links.button'
          }}
        >
          {`Show ${open ? 'less' : 'more'}`}
        </Box>
      </Box>
    </section>
  );
};

export default MoreProjects;
