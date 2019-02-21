import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
// import '../css/blog-post.css'; // make it pretty!

export default function Template({ data }) {
  const { post } = data;
  console.log(data);
  return (
    <Layout>
      <Helmet title={`revo.js - ${post.frontmatter.title}`} />
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
