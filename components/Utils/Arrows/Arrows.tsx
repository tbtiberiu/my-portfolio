import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

import styles from './Arrows.module.scss';

export const ArrowLeft = (
  onClickHandler: MouseEventHandler<HTMLButtonElement>,
  hasPrev: boolean,
  label: string
) => {
  return (
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className={styles['arrow-left']}
      >
        <Image
          src="/images/icons/arrow-left.svg"
          alt="previous"
          height={69}
          width={37}
        />
      </button>
    )
  );
};

export const ArrowRight = (
  onClickHandler: MouseEventHandler<HTMLButtonElement>,
  hasNext: boolean,
  label: string
) => {
  return (
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className={styles['arrow-right']}
      >
        <Image
          src="/images/icons/arrow-right.svg"
          alt="next"
          height={69}
          width={37}
        />
      </button>
    )
  );
};
