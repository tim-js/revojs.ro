import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Button from "@components/Button";
import SEO from "@components/SEO";

import "./blogPost.scss";

export default function BlogTemplate({ data }) {
  const { post } = data;

  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title}`}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.image}
      />

      <Header centered className="blog-post-header">
        <h1>{post.frontmatter.title}</h1>
      </Header>

      <Section light>
        <Content centered>
          <article className="blog-post">
            <span className="light-faded">
              Written on{" "}
              <time dateTime={post.frontmatter.date}>
                <strong>{post.frontmatter.date}</strong>
              </time>
            </span>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>

          <Link to="/blog">
            <Button white>Back to articles</Button>
          </Link>
        </Content>
      </Section>
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
        image
      }
    }
  }
`;
