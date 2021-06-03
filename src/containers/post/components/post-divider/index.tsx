import React, { FC } from 'react';
import styled from 'styled-components';

import PostAnchor from '../post-anchor';

const StyledPostDivider = styled.section`
  position: relative;
`;

const PostDivider: FC = () => (
  <StyledPostDivider>
    <PostAnchor />
  </StyledPostDivider>
);

export default PostDivider;
