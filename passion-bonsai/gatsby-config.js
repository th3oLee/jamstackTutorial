module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "PassionBonsai",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Y2J-10W1F8ItwfddU-R3TTevZGrPZ_N1FvKKHoXG_Wo",
        spaceId: "et0ps6mbxfg2",
      },
    },
  ],
};
