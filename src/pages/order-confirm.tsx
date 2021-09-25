import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import { useEndPoint } from '../components/useEndPoint';
import {
  block,
  box,
  waitIcon,
  successIcon,
  warnIcon,
  lineBreak,
  link,
} from '../styles/order-confirm.module.css';
import { Link } from 'gatsby';

const OrderConfirm = (): JSX.Element => {
  const [confirmed, setConfirmed] = useState(false);
  const [failed, setFailed] = useState(false);
  const endPoint = useEndPoint();

  useEffect(() => {
    (async () => {
      if (typeof location === 'undefined') return;

      const params = new URLSearchParams(location.search);
      let token = params.get('token');
      const transactionId = params.get('transactionId');
      const orderId = params.get('orderId');
      if (!token || !transactionId || !orderId) {
        setFailed(true);
        return;
      }
      token = token.replace(/\s/g, '+');
      try {
        await axios({
          method: 'POST',
          url: endPoint.confirmOrder(orderId),
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { orderId, transactionId },
        });
        setConfirmed(true);
      } catch (err) {
        console.error(err);
        setFailed(true);
      }
    })();
  }, [endPoint]);
  return (
    <Layout pageTitle="Orders">
      <section className={block}>
        <div className={box}>
          {!confirmed && !failed && (
            <>
              <i className={`fas fa-mug-hot ${waitIcon}`}></i>
              <span className={lineBreak} />
              <span style={{ fontWeight: 'bold' }}>確認中...</span>
            </>
          )}
          {confirmed && (
            <>
              <i className={`fa-solid fa-square-check ${successIcon}`}></i>
              <span className={lineBreak} />
              <Link to="/" className={link}>
                カフェインにハマってる{' '}
                <i className="fa-solid fa-whiskey-glass"></i> ?
              </Link>
            </>
          )}
          {failed && (
            <>
              <i className={`fa-solid fa-triangle-exclamation ${warnIcon}`}></i>
              <span className={lineBreak} />
              <Link to="/" className={link}>
                ( ﾟДﾟ) 改めて注文しよう
                <i className="fa-solid fa-whiskey-glass"></i>
              </Link>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default OrderConfirm;
