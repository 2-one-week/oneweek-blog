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
      <S.Wrapper position={scorllState.pageYOffset}>
        <S.TagHeader>태그 목록</S.TagHeader>
        <S.TagBody>
          <S.TagItem
            isCurrent={currentTag === 'Recent' || currentTag === 'ALL'}
            onClick={() => {
              onClickTag('ALL');
            }}
          >
            ALL
          </S.TagItem>
          {tags.map(({ fieldValue, totalCount }, index) => (
            <S.TagItem
              isCurrent={currentTag === fieldValue}
              key={index}
              onClick={() => {
                onClickTag(fieldValue);
              }}
            >
              {fieldValue}({totalCount})
            </S.TagItem>
          ))}
        </S.TagBody>
      </S.Wrapper>
    </S.Container>
  );
};

export default TagList;
