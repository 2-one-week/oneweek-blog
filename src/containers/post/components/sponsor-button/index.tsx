import React, { FC } from 'react';

import { buyMeCoffeeSponsorId } from '@constants/user-info';

import S from './style';

const SponsorButton: FC = () => (
  <S.Container>
    <S.BuyMeCoffeeButton>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.buymeacoffee.com/${buyMeCoffeeSponsorId}`}
      >
        <img
          src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
          alt="Buy me a coffee"
        />
        <span>커피 한잔?</span>
      </a>
    </S.BuyMeCoffeeButton>
  </S.Container>
);

export default SponsorButton;
