import React from 'react';
import { Box, Container } from 'theme-ui';

import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

import SEO from './SEO';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <>
    <SEO />
    <Container
      sx={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box>{children}</Box>
    </Container>
  </>
);

export default Layout;
