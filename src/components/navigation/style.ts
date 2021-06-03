import styled from 'styled-components';

const Navigation = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px;

  @media (max-width: 500px) {
    margin-left: 20px;
  }
`;

const H1 = styled.h1<{ current?: boolean }>`
  margin: 10px 30px 10px 0;
  color: ${({ theme: { colors }, current }) =>
    current ? colors.mainColor800 : colors.black};
  @media (max-width: 500px) {
    margin: 10px 15px 10px 0;
  }
`;

export default { Navigation, H1 };
