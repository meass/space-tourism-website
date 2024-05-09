'use client';

import { useState, useRef } from 'react';
import { barlow } from '../fonts';
import data from '@/app/data.json';
import styles from '@/app/styles/technology.module.css';
import Transition from '../components/Transition';

export default function Technology() {
  const { technology } = data;
  const [activeState, setActiveState] = useState(0);

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
          <Transition state={activeState}>
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
          </Transition>
        </div>
        <div className={styles['list-container']}>
          <ul>
            {Array.from([1, 2, 3]).map((item, index) => (
              <Transition key={item} state={activeState}>
                <li
                  onClick={() => handleActiveState(index)}
                  className={`${
                    activeState === index
                      ? 'bg-white text-black'
                      : 'bg-transparent text-white border border-[#383b4b]'
                  } cursor-pointer`}
                >
                  {item}
                </li>
              </Transition>
            ))}
          </ul>
          <div className={styles.content}>
            <Transition state={activeState}>
              <p className={barlow.className}>THE TERMINOLOGY…</p>
              <h2>{technology[activeState].name}</h2>
              <p className={barlow.className}>
                {technology[activeState].description}
              </p>
            </Transition>
          </div>
        </div>
      </div>
    </main>
  );
}
