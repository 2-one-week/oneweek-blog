import React, { FC } from 'react';
import { Link } from 'gatsby';

import S from './style';

interface IPostNavigator {
  previous: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  next: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

const PostNavigator: FC<IPostNavigator> = ({ previous, next }) => {
  return (
    <S.Navigation>
      <li>
        {previous ? (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        ) : (
          <Link to={'/'}>홈으로</Link>
        )}
      </li>
      <li>
        {next ? (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        ) : (
          <Link to={'/'}>홈으로</Link>
        )}
      </li>
    </S.Navigation>
  );
};

export default PostNavigator;
