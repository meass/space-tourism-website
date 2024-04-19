'use client';
import { useContext } from 'react';
import { barlow, barlowCondensed } from '../fonts';
import { crews } from '@/app/data.json';
import { StateContext } from '../ContextProvider';
import styles from '@/app/styles/crew.module.css';

export default function CrewPage() {
  const { sharedState } = useContext(StateContext);

  return (
    <main className={styles['crew-container']}>
      <div className={styles['grid-container']}>
        <h1 className={`${barlowCondensed.className} ${styles.title}`}>
          <span className="pr-4">02</span>meet your crew
        </h1>
        <div className={styles['img-container']}>
          <img
            className="lg:ml-auto md:mx-auto"
            src={crews[sharedState].images.webp}
            alt="douglas-hurley"
          />
        </div>
        <div className={styles.content}>
          <div className="lg:self-center">
            <p className={barlow.className}>{crews[sharedState].role}</p>
            <h1>{crews[sharedState].name}</h1>
            <p className={barlow.className}>{crews[sharedState].bio}</p>
          </div>
          <ul className={styles['list-container']}>
            {Array.from([0, 1, 2, 3]).map((item) => (
              <li
                key={item}
                className={`${
                  item === sharedState ? 'bg-white' : 'bg-[#979797]'
                }`}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
