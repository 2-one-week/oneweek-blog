import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import SEO from '@components/seo';
import Layout from '@containers/layout';

const LatestPostListQuery = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD HH:mm:ss")
          }
          fields {
            slug
          }
          id
        }
      }
      groupByCategory: group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;

const IndexPage: React.FC = () => {
  const {
    allMarkdownRemark: { edges, groupByCategory },
  } = useStaticQuery(LatestPostListQuery);

  console.log(groupByCategory);

  return (
    <Layout>
      <SEO title="Home" url="https://2oneweek.dev" />
      <h1>최근 작성한 게시글 목록</h1>
      <ul>
        {edges.map(({ node }: any) => (
          <li key={node.id}>
            <h2>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h2>
            <h3>{node.frontmatter.date}</h3>
            <p>{node.excerpt}</p>
            <hr />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
