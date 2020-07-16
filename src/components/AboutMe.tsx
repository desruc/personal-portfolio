/** @jsx jsx */
import { jsx, Box, Text, Heading } from 'theme-ui';

import AboutFooter from './AboutFooter';

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
          I'm a software developer based in Brisbane, Australia. I mostly do
          front-end development but have been known to get my hands dirty with
          all aspects of an application. I'm a self-proclaimed React fanactic,
          with a love for TypeScript!
        </Text>
      </div>
    </Box>
    <AboutFooter />
  </Box>
);

export default AboutMe;
