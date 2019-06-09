import * as React from 'react';

import './style.scss';

const Section2 = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="section__two">
    <div className="section__container">
      <h1 className="section__two-title">About <b>us</b></h1>
      <p className="section__two-descr">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Minus, aspernatur rerum! Ea suscipit voluptatum corporis
        placeat blanditiis. Natus iusto dolore, cupiditate ipsam
        sequi tenetur omnis nam repellat voluptatibus dolorum error.
      </p>
      <button className="section__two-learnbtn" type="button">Learn more</button>
    </div>
  </section>
));

export default Section2;
