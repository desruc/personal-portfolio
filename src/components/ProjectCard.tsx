/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';

type ProjectCardProps = {
  link: string;
  title: string;
  description: string;
  stack?: string[];
};

const ProjectCard = ({ link, title, description, stack }: ProjectCardProps) => (
  <Box sx={{ bg: '#202022', width: '100%', userSelect: 'none' }}>
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
      <Text as="p" sx={{ mt: 2 }}>
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
