import React, { FC } from 'react';

import useScroll from '@hooks/useScroll';

import S from './style';

export interface ITags {
  fieldValue: string;
  totalCount: number;
}

interface ITagList {
  currentTag: string;
  tags: ITags[];
  onClickTag: (tagName: string) => void;
}

const TagList: FC<ITagList> = ({ currentTag, tags, onClickTag }) => {
  const [scorllState] = useScroll();
  return (
    <S.Container>
      <S.TagHeader>태그 목록</S.TagHeader>
      <S.TagBody position={scorllState.pageYOffset}>
        <S.TagItem
          isCurrent={currentTag === 'Recent' || currentTag === 'ALL'}
          onClick={() => {
            onClickTag('ALL');
          }}
        >
          ALL (
          {tags.reduce((acc, { totalCount }) => {
            return acc + totalCount;
          }, 0)}
          )
        </S.TagItem>
        {tags.map((tag) => (
          <S.TagItem
            isCurrent={currentTag === tag.fieldValue}
            onClick={() => {
              onClickTag(tag.fieldValue);
            }}
          >
            {tag.fieldValue}({tag.totalCount})
          </S.TagItem>
        ))}
      </S.TagBody>
    </S.Container>
  );
};

export default TagList;
