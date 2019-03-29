import React from "react";
import { graphql } from "gatsby";
import Helmet, { HelmetProvider } from "react-helmet-async";

import Layout from "@components/Layout";

export default function Template({ data }) {
  const { post } = data;
  console.log(data);
  return (
    <Layout>
      <HelmetProvider>
        <Helmet title={`revo.js - ${post.frontmatter.title}`} />
      </HelmetProvider>

      <article className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  );
}

/*
export const pageQuery = graphql`
  query BlogPostByPath($url: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $url } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
*/
