/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

import ProjectList from './ProjectList';
import Skills from './Skills';
import Contact from './Contact';

const ScrollSection = () => (
  <Box
    id="scroll-section"
    sx={{
      position: 'static',
      padding: 32,
      minHeight: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      right: 0,
      '@media (min-width: 992px)': {
        position: 'absolute',
        padding: '0px 32px 32px 0px',
        maxWidth: 536
      },
      '@media (min-width: 1280px)': {
        position: 'absolute',
        padding: '0px 88px 88px 0px',
        maxWidth: 763
      }
    }}
  >
    <ProjectList />
    <Skills />
    <Contact />
  </Box>
);

export default ScrollSection;
