import styled from 'styled-components';
import { Link } from 'gatsby';

const Header = styled.header`
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
`;

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme: { sizes } }) => sizes.container};
  height: 100%;
  padding: 0 ${({ theme }) => theme.space[6]};
  margin: auto;
`;

const HeaderLink = styled(Link)<{ bold?: boolean }>`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.violet800};
  font-size: 1.8rem;
  font-weight: ${({ bold }) => bold && 'bold'};
`;

export default { Header, HeaderContainer, HeaderLink };
