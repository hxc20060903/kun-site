import React, { MouseEvent, useCallback, useRef } from 'react';
import {
  counter,
  counterNumber,
  counterAction,
  block,
  itemName,
} from './orderItem.module.css';

export const OrderItem = ({
  name,
  count,
  onChange,
}: {
  name: string;
  count: number;
  onChange: (count: number) => any;
}): JSX.Element => {
  const countRef = useRef(count);
  countRef.current = count;

  const increase = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      onChange(Math.max(0, countRef.current + 1));
    },
    [onChange]
  );
  const decrease = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      onChange(Math.max(0, countRef.current - 1));
    },
    [onChange]
  );

  return (
    <div className={block}>
      <span className={itemName}>{name}</span>
      <span className={counter}>
        <button className={counterAction} onClick={decrease}>
          -
        </button>
        <span className={counterNumber}>{count}</span>
        <button className={counterAction} onClick={increase}>
          +
        </button>
      </span>
    </div>
  );
};
