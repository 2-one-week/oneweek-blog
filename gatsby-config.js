const userConfig = require('./gatsby-user-config');

module.exports = {
  siteMetadata: userConfig,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'G-Y10F2TZ3DQ',
        head: true,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/contents/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/__about`,
        name: `about`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'one-dark',
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: 'post-anchor',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              margin: 36,
              scrollOffset: 0,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-emoji`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
                title
                description
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        draft
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: '2oneweek.dev',
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2oneweek.dev`,
        short_name: `2oneweek.dev`,
        start_url: '/',
        background_color: '#222',
        theme_color: '#222',
        display: 'minimal-ui',
        icon: './contents/assets/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': 'src',
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@types': 'src/types',
          '@utils': 'src/utils',
          '@styles': 'src/styles',
          '@containers': 'src/containers',
          '@constants': 'src/constants',
          '@hooks': 'src/hooks',
        },
        extensions: ['ts', 'js', 'tsx'],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [
          {
            userAgent: '*',
            allow: '/',
            sitemap: 'https://2oneweek.dev/sitemap.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
        disable: false,
      },
    },
  ],
};
