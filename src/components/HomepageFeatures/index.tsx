import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'DevOps',
    Svg: require('@site/static/img/devops.svg').default,
    description: (
      <>
        I do DevOps things!
      </>
    ),
  },
  {
    title: 'Flat Earth',
    Svg: require('@site/static/img/devops.svg').default,
    description: (
      <>
        I have a strong opinion about the shape of the Erf.
      </>
    ),
  },
  {
    title: 'Scientology',
    Svg: require('@site/static/img/devops.svg').default,
    description: (
      <>
        I have climbed to the top of the Scientology Bridge to Freedom and
        have achieved OT VIII.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
