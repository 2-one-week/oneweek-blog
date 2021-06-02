import styled from 'styled-components';

const Navigation = styled.ul`
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 12px;
  }

  a {
    padding: 7px 16px 8px 16px;
    border-radius: 6px;
    font-size: 12px;
    opacity: 0.8;
  }
`;

export default { Navigation };
