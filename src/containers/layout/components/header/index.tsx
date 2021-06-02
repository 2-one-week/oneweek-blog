import React, { FC } from 'react';

import GithubIcon from '@assets/github-icon';

import S from './style';

interface IHeader {
  title: string;
}

const Header: FC<IHeader> = ({ title }) => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderLink bold to="/">
          {title}
        </S.HeaderLink>
        <a target="_blank" href="https://github.com/2-one-week">
          <GithubIcon width={'30px'} height={'30px'} />
        </a>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
