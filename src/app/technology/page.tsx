'use client';

import { useState, useRef } from 'react';
import { barlow } from '../fonts';
import { technology } from '@/app/data.json';
import styles from '@/app/styles/technology.module.css';

export default function Technology() {
  const [activeState, setActiveState] = useState(0);
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const handleActiveState = (item: number) => {
    setActiveState(item);
  };

  return (
    <main className={styles['technology-container']}>
      <div className={styles['grid-container']}>
        <h1 className={barlow.className}>
          <span className="pr-4">03</span>SPACE LAUNCH 101
        </h1>
        <div className={styles['img-container']}>
          <img
            className="hidden lg:block w-full"
            src={technology[activeState].images.portrait}
            alt="launch-vehicle-portrait"
          />
          <img
            className="block lg:hidden w-full"
            src={technology[activeState].images.landscape}
            alt="launch-vehicle-portrait"
          />
        </div>
        <div className={styles['list-container']}>
          <ul>
            {Array.from([1, 2, 3]).map((item, index) => (
              <li
                onClick={() => handleActiveState(index)}
                key={item}
                className={`${
                  activeState === index
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white border border-[#383b4b]'
                } cursor-pointer`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.content}>
            <p className={barlow.className}>THE TERMINOLOGY…</p>
            <h2>{technology[activeState].name}</h2>
            <p className={barlow.className}>
              {technology[activeState].description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
