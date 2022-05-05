require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "test",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          testDZ: {
            populate: {
              image: "*",
              images: "*",
              testSingleMedia: {
                image: "*",
              },
              repeatableComponentTesting: {
                populate: {
                  mediaInRepeatable: {
                    populate: {
                      image: "*",
                      images: "*",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    {
      singularName: `page`,
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          blocks: {
            populate: {
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
            },
          },
        },
      },
    },
    `blog`,
  ],
  singleTypes: [],
  queryLimit: 1000,
};

module.exports = {
  siteMetadata: {
    title: `Tx Accountants`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `@imrankabir97`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter\:200,300,400,500,600,700,800,900`,
          `open sans\:300,400,500,600,700,800,900`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `purple`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
  ],
};
