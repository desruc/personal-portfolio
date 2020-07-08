/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

import ProjectList from './ProjectList';

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
  </Box>
);

export default ScrollSection;
