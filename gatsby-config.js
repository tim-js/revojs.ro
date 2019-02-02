module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "revo.js conference",
        short_name: "revo.js",
        start_url: "/",
        background_color: "#f45919",
        theme_color: "#f45919",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline"
  ]
};
