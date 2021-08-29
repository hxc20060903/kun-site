import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { container, heading } from './layout.module.css';
import { Header } from './header';

const Layout: FC<{
  pageTitle: string;
  children: React.ReactNode;
}> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <Helmet defer={false}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <style>{`
          html, body {
            height: 100%;
            background-color: #e2e2e2;
          }
        `}</style>
      </Helmet>
      <Header title={data.site.siteMetadata.title} />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
