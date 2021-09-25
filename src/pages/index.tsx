import React, { MouseEvent, useCallback, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import { OrderItem } from '../components/orderItem';
import {
  orderForm,
  home,
  orderTitle,
  orderContent,
  orderItem,
  orderSubmit,
} from '../styles/index.module.css';

const IndexPage = (): JSX.Element => {
  const [latteCount, setLatteCount] = useState(0);
  const [ccinoCount, setCcinoCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const submit = useCallback(
    async (event: MouseEvent) => {
      event.preventDefault();
      setSubmitting(true);
      const response = await axios({
        url: 'https://dev.api.hxcstatic.tk/orders',
        method: 'POST',
        data: {
          userId: 'tkou',
          products: [
            { id: 'TeLatte', quantity: latteCount },
            { id: 'SkyCcino', quantity: ccinoCount },
          ],
        },
      });
      window.location = response.data.web;
    },
    [latteCount, ccinoCount]
  );
  return (
    <Layout pageTitle="Home">
      <section className={home}>
        <form className={orderForm}>
          <div className={orderTitle}>メニュー</div>
          <div style={{ height: '200px', boxShadow: '0 0 1px black' }}></div>
          <ul className={orderContent}>
            <li className={orderItem}>
              <OrderItem
                name="TeLatte"
                count={latteCount}
                onChange={setLatteCount}
              />
            </li>
            <li className={orderItem}>
              <OrderItem
                name="SkyCcino"
                count={ccinoCount}
                onChange={setCcinoCount}
              />
            </li>
          </ul>
          <button
            className={orderSubmit}
            onClick={submit}
            disabled={submitting}
          >
            {submitting ? '処理中...' : '注文'}
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default IndexPage;
