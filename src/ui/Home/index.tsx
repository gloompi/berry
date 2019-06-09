import * as React from 'react';

import Section1 from '@ui/Home/components/Section1';
import Section2 from '@ui/Home/components/Section2';
import Section3 from '@ui/Home/components/Section3';

const sectionRef = React.createRef<HTMLDivElement>();

const Home: React.SFC = () => {
  const [active, setActive] = React.useState(false);
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    setActive(!active);
  };

  return (
    <>
      <main className="home__main">
        <Section1 sectionRef={sectionRef}/>
        <Section2 ref={sectionRef} />
        <Section3 handleClick={handleClick} active={active} />
      </main>
    </>
  );
};

export default Home;
