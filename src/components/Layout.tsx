/** @jsx jsx */
import React from 'react';
import { jsx, Box, Container } from 'theme-ui';
import { Global } from '@emotion/core';

import SEO from './SEO';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={() => ({
        a: {
          transition: 'all 0.3s ease-in-out'
        }
      })}
    />
    <SEO />
    <Container>
      <Box>{children}</Box>
    </Container>
  </React.Fragment>
);

export default Layout;
