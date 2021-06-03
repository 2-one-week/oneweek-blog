import React, { FC, useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import SEO from '@components/seo';
import CategoryListItem from '@components/category-list-item';
import CategoryCard from '@components/category-card';
import UserInfo from '@components/user-info';
import Layout from '@containers/layout';

const CategoryQuery = graphql`
  query CategoryQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            draft
            category
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

interface IPost {
  node: {
    id: string;
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      category: string;
      draft: boolean;
      date: string;
    };
  };
}

interface ICategory {
  fieldValue: string;
  totalCount: number;
}

const ALL = 'all';

const CategoryPage: FC = () => {
  const {
    allMarkdownRemark: { edges, groupByCategory },
  } = useStaticQuery(CategoryQuery);

  const [posts, setPosts] = useState<IPost[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>(ALL);

  const handleResetCategory = () => {
    setCurrentCategory('all');
  };

  const handleClickCategory = (categoryName: string) => {
    setCurrentCategory(categoryName);
  };

  useEffect(() => {
    if (edges && groupByCategory) {
      const filteredEdges = edges.filter(
        ({ node }: any) =>
          !node.frontmatter.draft && !!node.frontmatter.category,
      );
      setPosts(filteredEdges);
      setCategories(groupByCategory);
    }
  }, [edges, groupByCategory]);

  return (
    <Layout path="category">
      <SEO title="Category" url="https://2oneweek.dev" />
      <UserInfo />
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyItems: 'flex-start',
          alignItems: 'center',
          overflowX: 'auto',
          margin: '20px 0',
        }}
      >
        <CategoryListItem
          isCurrent={ALL === currentCategory}
          onClick={handleResetCategory}
          categoryName={ALL}
          categoryItemCount={categories.reduce((acc, category) => {
            return acc + category.totalCount;
          }, 0)}
        />
        {categories.map((category) => (
          <CategoryListItem
            key={category.fieldValue}
            isCurrent={category.fieldValue === currentCategory}
            onClick={() => {
              handleClickCategory(category.fieldValue);
            }}
            categoryName={category.fieldValue}
            categoryItemCount={category.totalCount}
          />
        ))}
      </ul>
      <ul>
        {posts
          .filter((post) => {
            if (currentCategory !== ALL) {
              return post.node.frontmatter.category === currentCategory;
            } else {
              return true;
            }
          })
          .map(({ node }: IPost) => (
            <CategoryCard key={node.id} node={node} />
          ))}
      </ul>
    </Layout>
  );
};

CategoryPage.displayName = 'CategoryPage';

export default CategoryPage;
