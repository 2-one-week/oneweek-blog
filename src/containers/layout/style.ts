import styled from 'styled-components';
import { Link } from 'gatsby';

const Main = styled.section`
  width: 100%;
  height: 100%;
  max-width: ${({ theme: { sizes } }) => sizes.container};
  margin: ${({ theme }) => theme.space[8]} auto 0;
  padding: ${({ theme }) => theme.space[6]};
`;

export default { Main };
