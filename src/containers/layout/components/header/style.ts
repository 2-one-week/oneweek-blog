import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const changePageAnimation = keyframes`
    0% {
        opacity: 0.01;
        transform: translate(0px, -10px);
    }
    100% {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`;

const Header = styled.header<{ hide: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: ${({ theme }) => theme.space[8]};
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray200};
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  width: 100%;
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  /* animation: 0.5s ease-in-out 0s 1 normal none running ${changePageAnimation}; */
`;

const HeaderContainer = styled.section<{ path: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme: { sizes }, path }) => sizes.bigContainer};
  height: 100%;
  padding: 0 ${({ theme }) => theme.space[6]};
  margin: 0 auto;
  a {
    margin: 0 20px;
  }
`;

const HeaderLink = styled(Link)<{ bold?: string }>`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.mainColor800};
  font-size: 18px;
  font-weight: ${({ bold }) => bold && 'bold'};
  margin: 0 20px;
`;

export default { Header, HeaderContainer, HeaderLink };
