/*
import { ReplaceRendererArgs, WrapRootElementNodeArgs } from 'gatsby';
import { PreviewStoreProvider } from 'gatsby-source-prismic';
import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';

import GlobalStyle from './src/styles/global-style';

interface ReplaceRenderer {
  (args: ReplaceRendererArgs, pluginOptions: unknown): any;
}

export const replaceRenderer: ReplaceRenderer = ({
  bodyComponent,
  setHeadComponents,
}) => {
  const styleSheets = new ServerStyleSheet();
  const styles = styleSheets.collectStyles(<GlobalStyle />);

  setHeadComponents([
    <style key="stitches" data-stitches="">
      {styles}
    </style>,
  ]);
};

export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
);
*/
