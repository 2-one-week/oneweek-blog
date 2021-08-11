import React, { FC, useState, useEffect, useRef } from 'react';

import SEO from '@components/seo';
import Navigation from '@components/navigation';
import { ITags } from '@components/tag-list';

import { PostCard, PostCardWrapper, IPostCard } from '@components/post';
import Layout from '@containers/layout';

import useLatestPostListQuery from '@hooks/useLatestPostListQuery';

const RECENT = 'Recent';

const IndexPage: FC = () => {
  const { edges, groupByTags } = useLatestPostListQuery();

  const [posts, setPosts] = useState<IPostCard[]>([]);
  const [currentPosts, setCurrentPosts] = useState<IPostCard[]>([]);
  const [tags, setTags] = useState<ITags[]>([]);
  const [currentTag, setCurrentTag] = useState<string>(RECENT);
  const [postCounts, setPostCounts] = useState<number>(10);

  const lastPost = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (edges) {
      const filteredEdges = edges.filter(
        ({ node }: IPostCard) =>
          !node.frontmatter.draft &&
          !!node.frontmatter.category &&
          !node.frontmatter.category.includes('resume'),
      );
      setPosts(filteredEdges);
    }

    if (groupByTags) {
      setTags(groupByTags);
    }
  }, [edges, groupByTags]);

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

  useEffect(() => {
    if (posts.length > 0) {
      setCurrentPosts(posts.slice(0, postCounts));
    }
  }, [postCounts, posts]);

  const handleClickTags = (tagName: string) => {
    setCurrentTag(tagName);
  };

  return (
    <Layout
      path="home"
      tagName={currentTag}
      tags={tags.filter((tag) => tag.totalCount > 1)}
      onClickTag={handleClickTags}
    >
      <SEO title="Home" url="https://2oneweek.dev" />
      <Navigation
        tagName={currentTag}
        tags={tags.filter((tag) => tag.totalCount > 1)}
        onClickTag={handleClickTags}
      />
      <PostCardWrapper>
        {currentTag === RECENT
          ? currentPosts.map(({ node }: IPostCard) => (
              <PostCard ref={lastPost} key={node.id} node={node} />
            ))
          : posts
              .filter((post) => {
                if (currentTag !== RECENT && currentTag !== 'ALL') {
                  return post.node.frontmatter.tags.includes(currentTag);
                }
                return true;
              })
              .map(({ node }: IPostCard) => (
                <PostCard key={node.id} node={node} />
              ))}
      </PostCardWrapper>
    </Layout>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
