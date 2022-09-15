import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "It's yours",
    Svg: require("@site/static/img/noun-open-2996145.svg").default,
    description: (
      <>
        Proprietary systems are often expensive and questionable in terms of
        data protection. taggy is open and your data stays with you.
      </>
    ),
  },
  {
    title: "Ready to go",
    Svg: require("@site/static/img/noun-scooter-1940285.svg").default,
    description: (
      <>
        Get going fast. Define some triggers words and start to tag your
        content.
      </>
    ),
  },
  {
    title: "Easy to connect",
    Svg: require("@site/static/img/noun-plug-connector-4649343.svg").default,
    description: (
      <>
        Our focus is on easy integration. Currently targeted: Vanilla JS and
        Angular. More to come!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
