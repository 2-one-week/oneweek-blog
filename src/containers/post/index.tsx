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
  PostThumbnail,
  PostTags,
} from './components';
import { IPageTemplate } from './type';

const PostTemplate: FC<IPageTemplate> = React.memo(({ pageContext }) => {
  const { previous, next, node } = pageContext;

  const {
    html,
    excerpt,
    fields: { slug },
    frontmatter: { title, date, thumbnail, tags },
  } = node;

  return (
    <Layout path={'post'}>
      <SEO
        title={title}
        url={`https://2oneweek.dev${slug}`}
        description={excerpt}
        imageUrl={thumbnail?.childImageSharp.fixed.src}
      />
      <PostTitle title={title} />
      <PostDate date={date} />
      <PostDivider />
      {tags && <PostTags tags={tags} />}
      {thumbnail && (
        <PostThumbnail imageSrc={thumbnail.childImageSharp.fixed.src} />
      )}
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
