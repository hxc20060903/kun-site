import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import {
  imgWrapper,
  imgWrapperTitle,
  active,
} from '../styles/index.module.css';

const indexImage = 'index-image';
const IndexPage = (): JSX.Element => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const imgSelector = `[data-e2e=${indexImage}]`;
    const scene = new ScrollMagic.Scene({
      triggerElement: imgSelector,
      triggerHook: 0.2,
    })
      .setClassToggle(`.${imgWrapperTitle}`, active)
      .addTo(controller)
      // @ts-ignore
      .setTween(imgSelector, 0.4, { opacity: 1, ease: Linear.easeOut });
    if (scene.addIndicators) {
      scene.addIndicators({ name: indexImage });
    }
    return () => {
      scene.destroy(true);
      controller.destroy(true);
    };
  }, [typeof ScrollMagic]);
  return (
    <Layout pageTitle="Home Page">
      <div data-e2e={indexImage} className={imgWrapper}>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
          src="../images/clifford.png"
        />
        <span className={imgWrapperTitle}>Big Title</span>
      </div>

      <p style={{ height: '500px' }}></p>
    </Layout>
  );
};

export default IndexPage;
