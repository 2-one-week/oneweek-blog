import React, { FC, useState, useRef, useEffect } from 'react';

import SEO from '@components/seo';
import {
  CategoryCard,
  CategoryListWrapper,
  CategoryListItem,
} from '@components/category';
import UserInfo from '@components/user-info';
import Layout from '@containers/layout';

import useCategoryQuery from '@hooks/useCategoryQuery';

const ALL = 'all';

const CategoryPage: FC = () => {
  const { edges, groupByCategory } = useCategoryQuery();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [currentPosts, setCurrentPosts] = useState<IPost[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>(ALL);
  const [postCounts, setPostCounts] = useState<number>(10);

  const lastPost = useRef<HTMLLIElement>(null);

  const handleResetCategory = () => {
    setCurrentCategory(ALL);
  };

  const handleClickCategory = (categoryName: string) => {
    setCurrentCategory(categoryName);
  };

  useEffect(() => {
    if (edges && groupByCategory) {
      const filteredEdges = edges.filter(
        ({ node }: any) =>
          !node.frontmatter.draft &&
          !!node.frontmatter.category &&
          !node.frontmatter.category.includes('resume'),
      );
      const filteredGroupByCategory = groupByCategory.filter(
        ({ fieldValue }: any) => !fieldValue.includes('resume'),
      );
      setPosts(filteredEdges);
      setCategories(filteredGroupByCategory);
    }
  }, [edges, groupByCategory]);

  useEffect(() => {
    if (posts.length > 0) {
      setCurrentPosts(posts.slice(0, postCounts));
    }
  }, [postCounts, posts]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastPost.current) {
      observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          if (entries[0].intersectionRatio <= 0) return;
          setPostCounts(postCounts + 10);
          observer.disconnect();
        },
        {
          root: null,
          threshold: 0.3,
        },
      );
      observer.observe(lastPost.current as Element);
    }
    return () => observer && observer.disconnect();
  }, [posts, currentPosts, postCounts]);

  return (
    <Layout path="category">
      <SEO title="Category" url="https://2oneweek.dev" />
      <UserInfo />
      <CategoryListWrapper>
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
      </CategoryListWrapper>
      <ul>
        {currentCategory === ALL
          ? currentPosts.map(({ node }: IPost) => (
              <CategoryCard ref={lastPost} key={node.id} node={node} />
            ))
          : posts
              .filter((post) => {
                if (currentCategory !== ALL) {
                  return post.node.frontmatter.category === currentCategory;
                } else {
                  return true;
                }
              })
              .map(({ node }: IPost) => (
                <CategoryCard ref={lastPost} key={node.id} node={node} />
              ))}
      </ul>
    </Layout>
  );
};
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

CategoryPage.displayName = 'CategoryPage';

export default CategoryPage;
