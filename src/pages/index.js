import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

// import GifPlayer from "react18-gif-player";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src="img/logo.png"></img>
        <p>
          Tagging content in web-based editorial systems, i.e. assigning content
          to a selection of topics
          <p>
            is mostly still done manually and therefore tedious and error-prone
            especially when it comes to large amounts of data.
          </p>
          <p>
            taggy is here to give you an open-source frontend module to help you
            with your tagging needs.
          </p>
        </p>
        {/* <GifPlayer
          gif="/img/taggy-example.gif"
          still="/img/preview.jpg"
          className={styles.gifPlayer}
        /> */}

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Documentation
          </Link>
        </div>
        {/* <div className="padding-top--md">
          <p>
            currently under development. You can watch the development
            status on{" "}
            <a href="https://github.com/open-taggy" style={{ color: "blue" }}>
              Github
            </a>
          </p>
        </div> */}
      </div>
    </header>
  );
}

function PoweredBy() {
  return (
    <div className={styles.poweredByBanner}>
      <div className="container">
        <p className={styles.poweredByTitle}>⚡ Powered by</p>
        <img className={styles.poweredByImg} src="img/mtl-powered-by.png"></img>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="helps you tag your content"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <PoweredBy />
      </main>
    </Layout>
  );
}
