import React, { FC } from 'react';

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
        <p className="date">{node.frontmatter.date}</p>
        <p className="excerpt">{node.excerpt}</p>
      </S.LinkWrapper>
    </S.Container>
  );
};

export default CategoryCard;
