import * as React from 'react';
import { animated } from 'react-spring';

interface IProps {
  idName?: string;
  scale?: any;
}

const AnimFeDisplacementMap = animated('feDisplacementMap');

const Liquid: React.SFC<IProps> = ({
  idName,
  scale,
}) => (
  <svg style={{ height: 0 }}>
    <filter id={idName}>
      <feTurbulence
        baseFrequency="0.142"
        numOctaves="3"
        result="wrap"
        type="fractalNoise"
      />
      <AnimFeDisplacementMap
        scale={scale}
        in="SourceGraphic"
        in2="wrap"
        xChannelSelector="R"
        yChannelSelector="B"
      />
    </filter>
  </svg>
);

export default Liquid;
