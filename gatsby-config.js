// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { BUCKET_NAME, SITE_ADDRESS } = process.env;
const siteAddress = new URL(SITE_ADDRESS);

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'kun-site',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: BUCKET_NAME,
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
        mergeCachingParams: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      },
    },
  ],
};
