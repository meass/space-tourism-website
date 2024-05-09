'use client';
import { useState } from 'react';
import { barlow, barlowCondensed } from '../fonts';
import data from '@/app/data.json';
import styles from '@/app/styles/crew.module.css';
import Transition from '../components/Transition';

export default function CrewPage() {
  const [acitveState, setActiveState] = useState(0);
  const { crews } = data;

  const handleActiveState = (item: number) => {
    setActiveState(item);
  };

  return (
    <main className={styles['crew-container']}>
      <div className={styles['grid-container']}>
        <h1 className={`${barlowCondensed.className} ${styles.title}`}>
          <span className="pr-4">02</span>meet your crew
        </h1>
        <Transition state={acitveState}>
          <div className={styles['img-container']}>
            <img
              className="lg:ml-auto md:mx-auto"
              src={crews[acitveState].images.webp}
              alt="douglas-hurley"
            />
          </div>
        </Transition>
        <div className={styles.content}>
          <div className="lg:self-center">
            <Transition state={acitveState}>
              <p className={barlow.className}>{crews[acitveState].role}</p>
              <h1>{crews[acitveState].name}</h1>
              <p className={barlow.className}>{crews[acitveState].bio}</p>
            </Transition>
          </div>
          <ul className={styles['list-container']}>
            {Array.from([0, 1, 2, 3]).map((item) => (
              <Transition key={item} state={acitveState}>
                <li
                  onClick={() => handleActiveState(item)}
                  className={`${
                    item === acitveState ? 'bg-white' : 'bg-[#979797]'
                  } cursor-pointer`}
                ></li>
              </Transition>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
