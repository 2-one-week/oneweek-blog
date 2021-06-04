import React, { FC } from 'react';
import styled from 'styled-components';

interface IPostThumbnail {
  imageSrc?: string;
}

const StyledImage = styled.img`
  max-height: 100vh;
  width: auto;
  max-width: 100%;
  margin: 2rem auto 0px;
  height: auto;
  object-fit: contain;
  display: block;
  overflow: hidden;
`;

const PostThumbnail: FC<IPostThumbnail> = ({ imageSrc }) => {
  return <StyledImage src={imageSrc} />;
};

export default PostThumbnail;
