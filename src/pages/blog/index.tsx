import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        slug
        frontmatter {
          date(formatString: "MMMM D, YYYY", locale: "ja")
          title
        }
      }
    }
  }
`;

const BlogPage = ({ data }: { data: any }): JSX.Element => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;
