import React, { FC } from 'react';

import S from './style';

export interface IPostCard {
  node: {
    excerpt: string;
    frontmatter: {
      title: string;
      thumbnail: string;
      draft: string;
      category: string;
      tag: string[];
      date: string;
    };
    fields: {
      slug: string;
    };
    id: string;
  };
}

const PostCard: FC<IPostCard> = ({ node }) => {
  const {
    excerpt,
    frontmatter: { thumbnail, title, date },
    fields: { slug },
  } = node;
  return (
    <S.Container>
      <S.SLink to={slug}>
        <S.Background>
          {thumbnail ? <S.ImageWrapper src={thumbnail} /> : <p>{title}</p>}
        </S.Background>

        <S.ContentWrapper>
          <S.TitleWrapper>{title}</S.TitleWrapper>
          <S.ExcerptWrapper>
            {excerpt.length > 70 ? `${excerpt.slice(0, 70)}...` : excerpt}
          </S.ExcerptWrapper>
          <S.DateWrapper>{date}</S.DateWrapper>
        </S.ContentWrapper>
      </S.SLink>
    </S.Container>
  );
};

export default PostCard;
