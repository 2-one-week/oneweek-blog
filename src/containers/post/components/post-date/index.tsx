import React, { FC } from 'react';
import styled from 'styled-components';

const StyledPostDate = styled.p`
  text-align: right;
  font-size: 12px;
  font-style: italic;
  margin: 20px 0;
`;

interface IPostDate {
  date: string;
}

const PostDate: FC<IPostDate> = ({ date }) => {
  return <StyledPostDate>{date}</StyledPostDate>;
};

export default PostDate;
