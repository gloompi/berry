import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import './style';

import { scrollTo } from '@src/utils/helper';
import { IProps } from './types';
import Liquid from '@ui/common/svg/Liquid';

const Section1: React.SFC<IProps> = ({ sectionRef }) => {
  const [active, setActive] = React.useState(false);
  const { scale, opacity } = useSpring({ scale: active ? 300 : 0, opacity: active ? 0 : 1 });

  const handleScroll = () => {
    scrollTo(sectionRef);
  };

  const handleEnter = () => {
    setActive(true);
  };
  const handleLeave = () => {
    setActive(false);
  };

  return (
    <section className="section__one">
      <animated.div style={{ opacity, filter: "url('#section1-liquid')" }} className="section__container">
        <img className="section__one-sputnik" src="/img/Sputnik.webp.png" alt="sputnik"/>
        <h1 className="section__one-title">Invest in the <b>Future</b></h1>
        <p className="section__one-descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minus, aspernatur rerum! Ea suscipit voluptatum corporis
          placeat blanditiis. Natus iusto dolore, cupiditate ipsam
          sequi tenetur omnis nam repellat voluptatibus dolorum error.
        </p>
        <button
          type="button"
          className="section__one-scrollbtn"
          onClick={handleScroll}
        />
      </animated.div>
      <Liquid scale={scale} idName="section1-liquid" />
      <Waypoint bottomOffset={100} onEnter={handleEnter} onLeave={handleLeave} />
    </section>
  );
};

export default Section1;
