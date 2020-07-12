/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

import ProjectList from './ProjectList';
import Skills from './Skills';
import Contact from './Contact';

const ScrollSection = () => (
  <Box
    id="scroll-section"
    sx={{
      position: 'absolute',
      minHeight: 0,
      padding: '0px 88px 88px 0px',
      maxWidth: 763,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      right: 0
    }}
  >
    <ProjectList />
    <Skills />
    <Contact />
  </Box>
);

export default ScrollSection;
