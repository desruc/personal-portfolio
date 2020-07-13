/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';

type ProjectCardProps = {
  link: string;
  title: string;
  description: string;
  stack?: string[];
};

const ProjectCard = ({ link, title, description, stack }: ProjectCardProps) => (
  <Box
    className="project-card"
    sx={{
      bg: '#202022',
      width: '100%',
      mt: 2,
      mb: 2,
      userSelect: 'none',
      transition: 'all .2s ease-in-out',
      transitionProperty: 'opacity, transform',
      '&:hover': { opacity: '1 !important', transform: 'scale(1.1)' }
    }}
  >
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      sx={{
        display: 'block',
        padding: 40,
        textDecoration: 'none',
        color: '#ffffff'
      }}
    >
      <Heading as="h3" sx={{ fontSize: 4, fontWeight: 500 }}>
        {title}
      </Heading>
      <Text as="p" sx={{ mt: 2, color: 'text', fontSize: 14 }}>
        {description}
      </Text>
      {stack && (
        <Text
          as="p"
          sx={{
            mt: 3,
            textTransform: 'uppercase',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: 3,
            color: '#ffffff'
          }}
        >
          {stack.join(', ')}
        </Text>
      )}
    </a>
  </Box>
);

export default ProjectCard;
