import React, { CSSProperties, useState } from 'react';
import {
  wrapper,
  plate,
  cup,
  vapour,
  vapourItem,
  fringe,
  innerFringe,
  tea,
  handle,
} from './hotcup.module.css';

export const HotCup = ({
  fontSize = '4px',
}: {
  fontSize?: string;
}): JSX.Element => {
  const [vapourSeeds] = useState(() => {
    return Array.from({ length: 10 }).map((_, index) => {
      return Math.floor(Math.random() * 10 + index) % 12;
    });
  });
  return (
    <div className={wrapper} style={{ fontSize }}>
      <div className={plate} />
      <div className={cup}>
        <div className={vapour}>
          {vapourSeeds.map((seed, index) => (
            <div
              key={index}
              className={vapourItem}
              style={{ '--seed': seed } as CSSProperties}
            />
          ))}
        </div>

        <div className={fringe}>
          <div className={innerFringe}>
            <div className={tea} />
          </div>
        </div>

        <div className={handle} />
      </div>
    </div>
  );
};
