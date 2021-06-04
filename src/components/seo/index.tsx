import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { ISEO } from './type';

const SEO: FC<ISEO> = ({
  title,
  url,
  description,
  ogType = 'article',
  imageUrl = 'https://user-images.githubusercontent.com/63051473/120667066-1a610000-c4c8-11eb-936b-a77840ed8a19.jpeg',
  imageWidth = 1200,
  imageHeight = 630,
}) => {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `);

  const getUrl = (url: string) => {
    let value = new URL(url, site?.siteMetadata?.siteUrl!).href;
    return (value = !value.endsWith('/') ? `${value}/` : value);
  };

  const pageDescription = description
    ? description
    : site?.siteMetadata?.description!;

  return (
    <Helmet titleTemplate={`%s | ${site?.siteMetadata?.title}`}>
      <html lang="ko" />
      <title lang="ko">{title}</title>
      <link rel="canonical" href={getUrl(url)} />
      <meta name="description" content={pageDescription} />
      <meta name="image" content={getUrl(imageUrl)} />
      <meta property="og:image" content={getUrl(imageUrl)} />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta property="og:url" content={getUrl(url)} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site?.siteMetadata?.author!} />
    </Helmet>
  );
};

SEO.displayName = 'SEO';

export default SEO;
