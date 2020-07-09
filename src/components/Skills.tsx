/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';

import TechIcon from './icons/TechIcon';

const Skills = () => (
  <Box sx={{ mt: 5, '&:hover': { '.tech-icon': { opacity: 0.5 } } }}>
    <Flex sx={{ flexWrap: 'wrap' }}>
      <TechIcon icon="javascript" />
      <TechIcon icon="react" />
      <TechIcon icon="gatsby" />
      <TechIcon icon="typescript" />
      <TechIcon icon="nodejs" />
      <TechIcon icon="mongodb" />
      <TechIcon icon="materialui" />
      <TechIcon icon="jest" />
      <TechIcon icon="redux" />
      <TechIcon icon="circleci" />
      <TechIcon icon="html" />
      <TechIcon icon="css" />
      <TechIcon icon="jquery" />
      <TechIcon icon="php" />
      <TechIcon icon="googlecloud" />
      <TechIcon icon="git" />
      <TechIcon icon="vuejs" />
      <TechIcon icon="docker" />
      <TechIcon icon="graphql" />
      <TechIcon icon="styledcomponents" />
      <TechIcon icon="mysql" />
      <TechIcon icon="webpack" />
      <TechIcon icon="microsoftazure" />
      <TechIcon icon="wordpress" />
      <TechIcon icon="swagger" />
      <TechIcon icon="mocha" />
      <TechIcon icon="redis" />
      <TechIcon icon="laravel" />
      <TechIcon icon="reactrouter" />
      <TechIcon icon="sass" />
    </Flex>
  </Box>
);

export default Skills;
