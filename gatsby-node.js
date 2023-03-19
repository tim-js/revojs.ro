const _ = require(`lodash`);
const path = require(`path`);
const slug = require(`slug`);
const slash = require(`slash`);

const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

// Remove this plugin to see all the mini css warnings about conflicting order
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allSpeakersJson(limit: 1000) {
          edges {
            node {
              speakerId
              slug
              image
              talkId
              edition
            }
          }
        }
        allTalksJson(limit: 1000) {
          edges {
            node {
              talkId
              edition
            }
          }
        }
        allInvitationsJson {
          edges {
            node {
              inviteId
              image
            }
          }
        }
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create image post pages.
    const speakerTemplate = path.resolve(`src/templates/speakerDetails.jsx`);
    // We want to create a detailed page for each
    // Instagram post. Since the scrapped Instagram data
    // already includes an ID field, we just use that for
    // each page's path.
    _.each(result.data.allSpeakersJson.edges, (edge) => {
      // Gatsby uses Redux to manage its internal state.
      // Plugins and sites can use functions like "createPage"
      // to interact with Gatsby.
      createPage({
        // Each page is required to have a `path` as well
        // as a template component. The `context` is
        // optional but is often necessary so the template
        // can query data specific to each page.
        path: `/${edge.node.edition}/speakers/${slug(
          edge.node.slug.toLowerCase()
        )}/`,
        component: slash(speakerTemplate),
        context: {
          id: edge.node.speakerId,
          image: edge.node.image,
          talkId: edge.node.talkId,
        },
      });
    });

    const talkTemplate = path.resolve(`src/templates/talkDetails.jsx`);
    _.each(result.data.allTalksJson.edges, (edge) => {
      createPage({
        path: `/${edge.node.edition}/agenda/${slug(
          edge.node.talkId.toLowerCase()
        )}/`,
        component: slash(talkTemplate),
        context: {
          id: edge.node.talkId,
          image: edge.node.image,
        },
      });
    });

    const invitationTemplate = path.resolve(`src/templates/invitedSpeaker.jsx`);
    _.each(result.data.allInvitationsJson.edges, (edge) => {
      createPage({
        path: `/invitation/${slug(edge.node.inviteId.toLowerCase())}/`,
        component: slash(invitationTemplate),
        context: {
          id: edge.node.inviteId,
          image: edge.node.image,
        },
      });
    });

    const blogPostTemplate = path.resolve(`src/templates/blogPost.jsx`);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          url: node.frontmatter.path,
        }, // additional data can be passed via context
      });
    });
  });
};
