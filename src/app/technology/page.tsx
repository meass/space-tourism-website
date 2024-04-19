'use client';

import { useContext } from 'react';
import { barlow } from '../fonts';
import { technology } from '@/app/data.json';
import { StateContext } from '../ContextProvider';
import styles from '@/app/styles/technology.module.css';

export default function Technology() {
  const { sharedState } = useContext(StateContext);
  return (
    <main className={styles['technology-container']}>
      <div className={styles['grid-container']}>
        <h1 className={barlow.className}>
          <span className="pr-4">03</span>SPACE LAUNCH 101
        </h1>
        <div className={styles['img-container']}>
          <img
            className="hidden lg:block w-full"
            src={technology[sharedState].images.portrait}
            alt="launch-vehicle-portrait"
          />
          <img
            className="block lg:hidden w-full"
            src={technology[sharedState].images.landscape}
            alt="launch-vehicle-portrait"
          />
        </div>
        <div className={styles['list-container']}>
          <ul>
            {Array.from([1, 2, 3]).map((item, index) => (
              <li
                key={item}
                className={`${
                  sharedState === index
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white border border-[#383b4b]'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.content}>
            <p className={barlow.className}>THE TERMINOLOGY…</p>
            <h2>{technology[sharedState].name}</h2>
            <p className={barlow.className}>
              {technology[sharedState].description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
