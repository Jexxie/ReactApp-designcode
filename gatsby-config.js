module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description:
      'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords:
      'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin',
  },
  pathPrefix: '/ReactApp-designcode',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'w3zwyqvq5jd9',
        accessToken:
          '5ab095cb9a503ab7404895f13c0ac9c213a5dbf86a3906fe801ad83df9546f19',
      },
    },
  ],
}
