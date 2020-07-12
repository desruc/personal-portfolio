/** @jsx jsx */
import { jsx, Box, Text, Heading } from 'theme-ui';

import Navigation from './Navigation';
import AboutFooter from './AboutFooter';

const AboutMe = () => (
  <Box
    sx={{
      position: 'fixed',
      height: '100vh',
      padding: '88px 0px 88px 88px',
      maxWidth: 496,
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div>
        <Heading as="h1" sx={{ fontSize: 64 }}>
          Hi, I'm James Cameron
        </Heading>
        <Text as="p" sx={{ marginTop: 32, fontSize: 14, lineHeight: 2 }}>
          I'm a software developer based in Brisbane, Australia. I mostly do
          front-end development and am a React fanactic. I am always looking to
          learn new things.
        </Text>
      </div>
      <Navigation />
    </Box>
    <AboutFooter />
  </Box>
);

export default AboutMe;
