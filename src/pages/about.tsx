import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@containers/layout';
import { PostContent } from '@containers/post/components';

export default ({ data }: any) => {
  const { node: resume } = data.allMarkdownRemark.edges[0];

  return (
    <Layout path={'resume'}>
      <PostContent html={resume.html} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
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
