import React, { FC } from 'react';

import { getDateLabel } from '@utils/date';

import S from './style';

interface ICategoryCard {
  node: {
    id: string;
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      category: string;
      date: string;
    };
  };
}

const CategoryCard: FC<ICategoryCard> = ({ node }) => {
  return (
    <S.Container>
      <S.LinkWrapper to={node.fields.slug}>
        <h2>{node.frontmatter.title}</h2>
        <p className="date">
          {getDateLabel(`${new Date(node.frontmatter.date).getTime()}`)}
        </p>
        <p className="excerpt">{node.excerpt}</p>
      </S.LinkWrapper>
    </S.Container>
  );
};

export default CategoryCard;
