import React, { FC } from 'react';
import { Link } from 'gatsby';

import S from './style';

const Navigation: FC = () => {
  return (
    <S.Navigation>
      <S.H1 current>Recent</S.H1>
      <Link to="/category">
        <S.H1>Category</S.H1>
      </Link>
      <Link to="/about">
        <S.H1>About</S.H1>
      </Link>
    </S.Navigation>
  );
};

export default Navigation;
