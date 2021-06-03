import React, { FC } from 'react';

import Layout from '@containers/layout';
import SEO from '@components/seo';
import UserInfo from '@components/user-info';

import {
  PostNavigator,
  PostContent,
  PostDate,
  PostTitle,
  PostComments,
  SponsorButton,
  PostDivider,
} from './components';

interface IPageTemplate {
  pageContext: {
    previous: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
    next: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
    node: {
      excerpt: string;
      html: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        draft: string;
        category: string;
        tag: string;
        date: string;
      };
    };
  };
}

const PostTemplate: FC<IPageTemplate> = React.memo(({ pageContext }) => {
  const { previous, next, node } = pageContext;

  const {
    html,
    fields: { slug },
    frontmatter: { title, date },
  } = node;

  return (
    <Layout path={'post'}>
      <SEO title={title} url={`https://2oneweek.dev${slug}`} />
      <PostTitle title={title} />
      <PostDate date={date} />
      <PostDivider />
      <PostContent html={html} />
      <PostNavigator previous={previous} next={next} />
      <UserInfo />
      <SponsorButton />
      <PostComments url={slug} />
    </Layout>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
