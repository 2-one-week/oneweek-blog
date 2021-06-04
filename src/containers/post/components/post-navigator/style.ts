import styled from 'styled-components';

const Navigation = styled.ul`
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
    border: 1px solid ${({ theme: { colors } }) => colors.mainColor};
    border-radius: 6px;

    &:first-child {
      padding: 6px 10px;
    }
    &:last-child {
      padding: 6px 10px;
    }

    a {
      font-size: 18px;
      opacity: 0.8;
      text-align: center;
    }

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.mainColor};
      & > a {
        color: white;
      }
    }
  }
`;

export default { Navigation };
