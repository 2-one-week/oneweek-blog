import React, { FC } from 'react';

import useScroll from '@hooks/useScroll';
import GithubIcon from '@assets/github-icon';
import { TPath } from '@containers/layout';

import S from './style';

interface IHeader {
  title: string;
  path: TPath;
}

const Header: FC<IHeader> = ({ path, title }) => {
  const [scorllState] = useScroll();

  return (
    <S.Header hide={scorllState.hide}>
      <S.HeaderContainer path={path}>
        <S.HeaderLink bold={'true'} to="/">
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
