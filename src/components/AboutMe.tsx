/** @jsx jsx */
import { jsx, Box, Text, Heading } from 'theme-ui';

import AboutFooter from './AboutFooter';
import Navigation from './Navigation';

const AboutMe = () => (
  <Box
    sx={{
      position: 'static',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      '@media (min-width: 992px)': {
        height: '100vh',
        position: 'fixed',
        padding: '32px 0px 32px 32px',
        maxWidth: 408
      },
      '@media (min-width: 1280px)': {
        height: '100vh',
        position: 'fixed',
        padding: '88px 0px 88px 88px',
        maxWidth: 496
      }
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 992px)': { flex: 1 }
      }}
    >
      <div>
        <Heading as="h1" sx={{ fontSize: 64, fontWeight: 500 }}>
          Hi, I'm James Cameron
        </Heading>
        <Text as="p" sx={{ marginTop: 32, fontSize: 14, lineHeight: 2 }}>
          I'm a software engineer based in Brisbane, Australia; and love
          building things for the web. I specialize in front-end development but
          usually end up involved in all aspects of an application - I just
          can't help myself! I have an unsatisfiable curiosity when it comes to
          programming and I'm always tinkering with something new in my spare
          time.
        </Text>
      </div>
      <Navigation />
    </Box>
    <AboutFooter />
  </Box>
);

export default AboutMe;
