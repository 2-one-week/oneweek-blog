import React, { FC } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import SEO from '@components/seo';
import Navigation from '@components/navigation';
import PostCard, { IPostCard } from '@components/post-card';
import Layout from '@containers/layout';

const LatestPostListQuery = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            thumbnail
            draft
            category
            tag
            date(formatString: "YYYY-MM-DD HH:mm:ss")
          }
          fields {
            slug
          }
          id
        }
      }
      groupByTag: group(field: frontmatter___tag) {
        fieldValue
        totalCount
      }
    }
  }
`;

const IndexPage: FC = () => {
  const {
    allMarkdownRemark: { edges, groupByTag },
  } = useStaticQuery(LatestPostListQuery);

  const filteredEdges = edges.filter(
    ({ node }: any) => !node.frontmatter.draft && !!node.frontmatter.category,
  );

  return (
    <Layout path="home">
      <SEO title="Home" url="https://2oneweek.dev" />
      <Navigation />
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredEdges.map(({ node }: IPostCard) => (
          <PostCard key={node.id} node={node} />
        ))}
      </ul>
    </Layout>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
