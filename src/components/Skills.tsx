/** @jsx jsx */
import { jsx, Box, Heading, Flex } from 'theme-ui';

import TechIcon from './TechIcon';

const Skills = () => {
  const exceptional = [
    'javascript',
    'react',
    'redux',
    'reactrouter',
    'materialui',
    'styledcomponents',
    'gatsby',
    'nodejs',
    'mongodb',
    'html',
    'css',
    'sass',
    'git'
  ];

  const great = [
    'typescript',
    'docker',
    'graphql',
    'jest',
    'circleci',
    'googlecloud',
    'swagger'
  ];

  const good = [
    'nextjs',
    'vuejs',
    'mocha',
    'php',
    'laravel',
    'wordpress',
    'jquery',
    'mysql'
  ];

  return (
    <Box
      id="skills"
      sx={{ pt: 40, pb: 40, '@media (min-width: 992px)': { pt: 88, pb: 0 } }}
    >
      <Heading sx={{ variant: 'heading.section' }}>02. Skills</Heading>
      <Heading as="h5" sx={{ variant: 'heading.section' }}>
        Exceptional
      </Heading>
      <Flex
        className="exceptional-skills"
        sx={{
          variant: 'flex.skills'
        }}
      >
        {exceptional.map(icon => (
          <TechIcon key={icon} icon={icon} />
        ))}
      </Flex>
      <Heading as="h5" sx={{ variant: 'heading.section' }}>
        Great
      </Heading>
      <Flex sx={{ variant: 'flex.skills' }}>
        {great.map(icon => (
          <TechIcon key={icon} icon={icon} />
        ))}
      </Flex>
      <Heading as="h5" sx={{ variant: 'heading.section' }}>
        Good
      </Heading>
      <Flex sx={{ variant: 'flex.skills' }}>
        {good.map(icon => (
          <TechIcon key={icon} icon={icon} />
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;
