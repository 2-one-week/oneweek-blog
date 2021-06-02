import React, { FC } from 'react';
import styled from 'styled-components';

interface IPostContent {
  html: string;
}

const PostContentWrapper = styled.article`
  line-height: 1.625;
  color: ${({ theme: { colors } }) => colors.gray700};

  a: {
    color: ${({ theme: { colors } }) => colors.violet800};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme: { colors } }) => colors.gray800};
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  pre {
    overflow: auto;
    background: ${({ theme: { colors } }) => colors.gray800};
    color: ${({ theme: { colors } }) => colors.gray300};
    padding: ${({ theme: { space } }) => space[6]};
    border-radius: 4px;
  }
`;

const PostContent: FC<IPostContent> = ({ html }) => (
  <PostContentWrapper dangerouslySetInnerHTML={{ __html: html }} />
);

export default PostContent;
