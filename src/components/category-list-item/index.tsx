import React, { FC } from 'react';

import S from './style';

interface ICategoryListItem {
  categoryName: string;
  categoryItemCount: number;
  isCurrent: boolean;
  onClick?: () => void;
}

const CategoryListItem: FC<ICategoryListItem> = ({
  isCurrent,
  onClick,
  categoryName,
  categoryItemCount,
}) => {
  return (
    <S.Container isCurrent={isCurrent} onClick={onClick}>
      <p>{categoryName}</p>
      <S.NumberWrapper isCurrent={isCurrent}>
        {categoryItemCount}
      </S.NumberWrapper>
    </S.Container>
  );
};

export default CategoryListItem;
