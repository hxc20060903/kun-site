import React, { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { container, heading } from './layout.module.css';
import { Header } from './header';
import { getLiff } from '../window';

const liff = getLiff();

const Layout: FC<{
  pageTitle: string;
  children: React.ReactNode;
}> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          liffId
        }
      }
    }
  `);
  useEffect(() => {
    if (!liff) return;
    (async () => {
      liff
        .init({ liffId: data.site.siteMetadata.liffId })
        .then(() => {
          console.log(location.href);
          if (!liff.isLoggedIn()) {
            return liff.login();
          }
          liff.getProfile().then(console.log);
          liff.sendMessages([
            { type: 'text', text: 'hello world from LINE LIFF!' },
          ]);
        })
        .catch(console.error);
    })();
  }, [liff]);
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
        <div>123</div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
