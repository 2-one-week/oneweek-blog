import React, { FC } from 'react';
import { useStaticQuery, Link } from 'gatsby';
import Layout from '@containers/layout';

import { PostNavigator, PostContent } from './components';

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
    id: string;
    html: string;
  };
}

const PostTemplate: FC<IPageTemplate> = React.memo(({ pageContext }) => {
  const { id, html, previous, next } = pageContext;
  return (
    <Layout>
      <hr />
      <PostContent html={html} />
      <PostNavigator previous={previous} next={next} />
    </Layout>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
