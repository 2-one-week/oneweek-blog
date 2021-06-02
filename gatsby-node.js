const { CreatePagesArgs } = require('gatsby');
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

const pathJoin = (targetPath) => path.join(__dirname, targetPath);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          previous {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          node {
            fields {
              slug
            }
            frontmatter {
              title
              draft
              category
              tag
            }
            id
            html
          }
        }
        groupByCategory: group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
        groupByTag: group(field: frontmatter___tag) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const postTemplatePath = pathJoin('./src/containers/post/index.tsx');
  const homePostListTemplatePath = pathJoin(
    'src/components/home/HomePostListTemplate.tsx',
  );

  if (result.errors) {
    throw result.errors;
  }

  if (result.data) {
    result.data.allMarkdownRemark.groupByCategory.forEach((data) => {
      createPage({
        path: `/category/${data.fieldValue}/`,
        component: postTemplatePath,
        context: {
          category: data.fieldValue,
        },
      });
    });

    result.data.allMarkdownRemark.groupByTag.forEach((data) => {
      createPage({
        path: `/tag/${data.fieldValue}/`,
        component: postTemplatePath,
        context: {
          tag: data.fieldValue,
        },
      });
    });

    const posts = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => !node.frontmatter.draft && !!node.frontmatter.category,
    );

    posts.forEach(({ previous, node, next }) => {
      createPage({
        path: node.fields.slug,
        component: postTemplatePath,
        context: {
          next,
          previous,
          id: node.id,
          html: node.html,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
