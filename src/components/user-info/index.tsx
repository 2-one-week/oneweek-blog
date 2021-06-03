import React, { FC } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import S from './style';

export const UserInfo: FC = () => {
  const data = useStaticQuery(useInfoQuery);
  const { author, social, introduction } = data.site.siteMetadata;

  return (
    <S.Container>
      <div className="author">
        <div className="author-description">
          <Image
            className="author-image"
            fixed={data.avatar.childImageSharp.fixed}
            style={{
              borderRadius: `100%`,
            }}
          />
          <div className="author-name">
            <span className="author-name-prefix">Written by</span>
            <Link to={'/about'} className="author-name-content">
              <span>@{author}</span>
            </Link>
            <div className="author-introduction">{introduction}</div>
            <p className="author-socials">
              {social.github && (
                <a href={`https://github.com/${social.github}`}>GitHub</a>
              )}
              {social.linkedin && (
                <a href={`https://www.linkedin.com/in/${social.linkedin}/`}>
                  LinkedIn
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export const useInfoQuery = graphql`
  query UserInfoQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
          linkedin
          instagram
        }
      }
    }
  }
`;

export default UserInfo;
