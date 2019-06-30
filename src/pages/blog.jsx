import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";

import revojs from "@assets/revo.js.svg";

import "./blog.scss";

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout title="revo.js Blog">
      <Header centered className="blog-header">
        <h1>
          <img className="about-logo-text" src={revojs} alt="revo.js" /> Blog
        </h1>
      </Header>

      <Section light>
        <Content centered>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <article key={post.id} className="blog-post">
                  <h2 className="blog-post-title">
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <strong>
                    <time dateTime={post.frontmatter.date}>
                      {post.frontmatter.date}
                    </time>
                  </strong>
                  <p>{post.excerpt}</p>
                </article>
              );
            })}
        </Content>
      </Section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
