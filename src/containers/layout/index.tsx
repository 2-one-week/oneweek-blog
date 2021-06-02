import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/global-style';
import theme from '@styles/theme';

import Header from './components/header';
import Footer from './components/footer';

import S from './style';

const Layout: FC = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header title={site?.siteMetadata?.title} />
      <S.Main>{children}</S.Main>
      <Footer />
    </ThemeProvider>
  );
};

Layout.displayName = 'Layout';

export default Layout;
