import * as React from 'react';
import { animated, useTrail } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CyclopeGirl from '@ui/common/components/CyclopeGirl';

import './style.scss';
import { IProps } from './types';

const teamMembers = [
  {
    name: 'Donald',
    picSrc: '/img/donald.jpg',
    occupation: 'CEO',
  },
  {
    name: 'Zack',
    picSrc: '/img/zack.jpg',
    occupation: 'Marketing CEO',
  },
  {
    name: 'Kuba',
    picSrc: '/img/profile.jpg',
    occupation: 'Lead Software Engineer',
  },
  {
    name: 'Abdu',
    picSrc: '/img/abdu.jpg',
    occupation: 'Financial Manager',
  }
];

const Section3: React.SFC<IProps> = ({ active, handleClick }) => {
  const trails = useTrail(teamMembers.length, {
    display: Boolean(active) ? 'flex' : 'none',
    opacity: Boolean(active) ? 1 : 0,
  });

  return (
    <section className="section__three">
      <div className="section__three-top">
        <div className="section__container">
          <h1 className="section__three-title">
            <span>Our team</span>
            <b className="blue">Heroes</b>
            <b>Board</b>
            <a href="/" onClick={handleClick}>
              <FontAwesomeIcon className="icon" icon="trophy"/>
            </a>
          </h1>
          <p className="section__three-descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus, aspernatur rerum! Ea suscipit voluptatum corporis
            placeat blanditiis. Natus iusto dolore, cupiditate ipsam
            sequi tenetur omnis nam repellat voluptatibus dolorum error.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus, aspernatur rerum! Ea suscipit voluptatum corporis
            placeat blanditiis. Natus iusto dolore, cupiditate ipsam
            sequi tenetur omnis nam repellat voluptatibus dolorum error.
          </p>
          <p className="section__three-descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus, aspernatur rerum! Ea suscipit voluptatum corporis
            placeat blanditiis. Natus iusto dolore, cupiditate ipsam
            sequi tenetur omnis nam repellat voluptatibus dolorum error.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus, aspernatur rerum! Ea suscipit voluptatum corporis
            placeat blanditiis. Natus iusto dolore, cupiditate ipsam
            sequi tenetur omnis nam repellat voluptatibus dolorum error.
          </p>
        </div>
      </div>
      <div className="section__three-body">
        <CyclopeGirl/>
        <ul className="section__three-list">
          {trails.map((animation, key) => {
            const { name, picSrc, occupation } = teamMembers[key];

            return (
              <animated.li key={key} style={animation}>
                <div className="members__wrap" >
                  <img src={picSrc} className="members__pic" alt="Kuba"/>
                  <div className="members__content">
                    <h3>{name}</h3>
                    <p>{occupation}</p>
                  </div>
                </div>
              </animated.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Section3;
