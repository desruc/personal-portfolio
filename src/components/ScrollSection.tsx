/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

import ProjectList from './ProjectList';
import Skills from './Skills';

const ScrollSection = () => (
  <Box
    sx={{
      position: 'absolute',
      height: '300vh',
      padding: '88px 88px 88px 0px',
      maxWidth: 763,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      right: 0
    }}
  >
    <ProjectList />
    <Skills />
  </Box>
);

export default ScrollSection;
