import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import SEO from '@components/seo';
import Layout from '@containers/layout';
import {
  PostTitle,
  PostDate,
  PostDivider,
  PostContent,
} from '@containers/post/components';

const StyledResumeTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ({ data }: any) => {
  const { node: resume } = data.allMarkdownRemark.edges[0];

  return (
    <Layout path={'resume-eng'}>
      <SEO title="Resume" url="https://2oneweek.dev" />
      <StyledResumeTitle>
        <PostTitle title={resume.frontmatter.title} />
        <Link to={'/about'}> 한글 이력서</Link>
      </StyledResumeTitle>
      <PostDate date={resume.frontmatter.date} />
      <PostDivider />
      <PostContent html={resume.html} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "resume-eng" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
