module.exports = {
  siteMetadata: {
    title: '2oneweek.dev',
    description: '이한주 개발 블로그입니다.',
    author: '2-one-week',
    siteUrl: 'https://2oneweek.dev',
  },
  plugins: [
    // `gatsby-plugin-ts-config`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/blog`,
        name: `blog`,
      },
    },
    `gatsby-transformer-remark`,
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
        icon: './src/assets/favicon.png',
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
        },
        extensions: ['ts', 'js', 'tsx'],
      },
    },
    // {
    //   resolve: `gatsby-plugin-typegen`,
    //   options: {
    //     outputPath: `src/types/gatsby-types.d.ts`,
    //   },
    // },
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-Y10F2TZ3DQ',
        head: true,
        anonymize: true,
      },
    },
  ],
};
