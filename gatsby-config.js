require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: `page`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          author: {
            populate: "*",
          },
          blocks: {
            populate: {
              image: "*",
              images: "*",
              heroBackground: {
                populate: {
                  image: "*",
                  images: "*",
                },
              },
              heroButton: {
                populate: "*",
              },
              aboutButton: {
                populate: "*",
              },
              aboutHeader: {
                populate: "*",
              },
              servicesIconStack: {
                populate: "*",
              },
              whyUsIconStack: {
                populate: "*",
              },
              whyUsBg: {
                populate: "*",
              },
              company: {
                populate: "*",
              },
              contactHeader: {
                populate: "*",
              },
              contactBg: {
                populate: "*",
              },
              faqHeader: {
                populate: "*",
              },
              faqStack: {
                populate: "*",
              },
              whoWeAreContent: {
                populate: "*",
              },
              whoWeAreBg: {
                populate: "*",
              },
              benefits: {
                populate: "*",
              },
              idealFor: {
                populate: "*",
              },
              backgroundImage:{
                populate: "*",
              },
              visionTechContent:{
                populate: "*",
              }
            },
          },
        },
      },
    },
    `blog`,
    {
      singularName: `user`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
        },
      },
    },
  ],
  singleTypes: [],
  queryLimit: 1000,
};

module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    title: `Tx Accountants`,
    siteUrl: process.env.SITE_URL,
    author: `@imrankabir97`,
  },

  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-loadable-components-ssr",
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `txaccountants`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `src/images/icons/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-tidio-chat",
      options: {
        tidioKey: process.env.TIDIO_PUBLIC_KEY,
        enableDuringDevelop: true, // Optional. Disables Tidio chat widget when running Gatsby dev server. Defaults to true.
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "@slixites/gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "inter:100,200,300,400,500,600,700,800,900",
          "open sans:300,400,500,600,700",
        ],
        display: "swap",
        preconnect: true,
        attributes: {
          rel: "stylesheet preload prefetch",
          as: "style",
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#854DFF`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
};
