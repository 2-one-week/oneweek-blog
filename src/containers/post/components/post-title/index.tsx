import React, { FC } from 'react';

interface IPostTitle {
  title: string;
}

const PostTitle: FC<IPostTitle> = ({ title }) => <h1>{title}</h1>;

export default PostTitle;
