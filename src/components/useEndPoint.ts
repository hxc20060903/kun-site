import { useRef } from 'react';
import pupa from 'pupa';
import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useEndPoint = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          apiGateway
        }
      }
    }
  `);
  const {
    site: {
      siteMetadata: { apiGateway },
    },
  } = data;
  const ref = useRef({
    submitOrder: `${apiGateway}/orders`,
    confirmOrder: (orderId: string): string =>
      pupa(`${apiGateway}/orders/{0}/confirm`, [orderId]),
  });
  return ref.current;
};
