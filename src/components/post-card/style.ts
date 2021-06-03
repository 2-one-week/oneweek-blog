import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const changePageAnimation = keyframes`
    0% {
        opacity: 0.01;
        transform: translate(0px, 3px);
    }
    100% {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`;

const Container = styled.li`
  width: 260px;
  height: 300px;
  list-style: none;
  margin: 10px 20px;
  padding: 0;
  animation: 0.5s ease-in-out 0s 1 normal none running ${changePageAnimation};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgb(81 99 120 / 10%) 0px 3px 3px 0px;
`;

const SLink = styled(Link)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  outline: none;
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Background = styled.article`
  width: 100%;
  height: 140px;
  overflow: hidden;
  background-color: ${({ theme: { colors } }) => colors.mainColor800};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.white};
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
  }
`;

const ContentWrapper = styled.section`
  width: 100%;
  height: 140px;
  padding: 12px 5px;
`;

const TitleWrapper = styled.article`
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  margin: 5px 6px;
`;

const ExcerptWrapper = styled.p`
  width: 100%;
  height: 70px;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  font-size: 16px;
  margin: 5px 6px;
  color: ${({ theme: { colors } }) => colors.gray800};
`;

const DateWrapper = styled.p`
  width: 100%;
  height: 20px;
  font-size: 14px;
  margin: 2.5px 6px;
  color: ${({ theme: { colors } }) => colors.gray500};
`;

export default {
  Container,
  Background,
  SLink,
  ImageWrapper,
  ContentWrapper,
  TitleWrapper,
  ExcerptWrapper,
  DateWrapper,
};
