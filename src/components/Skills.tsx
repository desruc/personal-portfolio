/** @jsx jsx */
import { jsx, Box, Heading, Flex } from 'theme-ui';

import TechIcon from './icons/TechIcon';

const Skills = () => {
  const exceptional = [
    'html',
    'css',
    'git',
    'javascript',
    'react',
    'redux',
    'reactrouter',
    'materialui',
    'styledcomponents',
    'gatsby',
    'sass'
  ];

  const great = [
    'typescript',
    'docker',
    'nodejs',
    'mongodb',
    'graphql',
    'jest'
  ];

  const good = ['vuejs', 'php', 'jquery', 'mysql', 'laravel', 'wordpress'];

  return (
    <Box id="skills" sx={{ pt: 5 }}>
      <Heading as="h5" sx={{ variant: 'heading.skills' }}>
        Exceptional
      </Heading>
      <Flex
        className="exceptional-skills"
        sx={{
          variant: 'flex.skills'
        }}
      >
        {exceptional.map(icon => (
          <TechIcon icon={icon} />
        ))}
      </Flex>
      <Heading as="h5" sx={{ variant: 'heading.skills' }}>
        Great
      </Heading>
      <Flex sx={{ variant: 'flex.skills' }}>
        {great.map(icon => (
          <TechIcon icon={icon} />
        ))}
      </Flex>
      <Heading as="h5" sx={{ variant: 'heading.skills' }}>
        Good
      </Heading>
      <Flex sx={{ variant: 'flex.skills' }}>
        {good.map(icon => (
          <TechIcon icon={icon} />
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;
