'use client';

import { barlow, barlowCondensed } from '@/app/fonts';
import { destinations } from '@/app/data.json';
import { useContext } from 'react';
import { StateContext } from '@/app/ContextProvider';
import styles from '@/app/styles/destination.module.css';

export default function DestinationPage() {
  const { sharedState, setSharedState } = useContext(StateContext);
  const handleDestination = (index: number) => {
    setSharedState(index);
  };
  return (
    <main className={styles['destination-container']}>
      <div className={styles['grid-container']}>
        <h1 className={barlowCondensed.className}>
          <span className="pr-4">01</span>Pick your destination
        </h1>
        <div className={styles['img-container']}>
          <img src={destinations[sharedState].images.webp} alt="image-moon" />
        </div>
        <div className={styles['list-container']}>
          <ul className={barlowCondensed.className}>
            {destinations.map((dest, index) => (
              <li
                key={dest.name}
                className={`${sharedState === index && 'border-b-2'}`}
                onClick={() => handleDestination(index)}
              >
                <button className="text-sm md:text-base uppercase">
                  {dest.name}
                </button>
              </li>
            ))}
          </ul>
          <h2>{destinations[sharedState].name}</h2>
          <p className={`${barlow.className}`}>
            {destinations[sharedState].description}
          </p>
          <div className="horizontal-line" />
          <div className={styles.footer}>
            <div className="uppercase text-center lg:text-start">
              <span className={`${barlowCondensed.className} text-sm`}>
                avg. distance
              </span>
              <h3 className="text-3xl">{destinations[sharedState].distance}</h3>
            </div>
            <div className="uppercase text-center">
              <span className={`${barlowCondensed.className} text-sm`}>
                est. travel time
              </span>
              <h3 className="text-3xl">{destinations[sharedState].travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
