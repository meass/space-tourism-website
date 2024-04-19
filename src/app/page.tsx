import { barlow, barlowCondensed } from '@/app/fonts';
import styles from '@/app/styles/home.module.css';

export default function Home() {
  return (
    <main className={styles['home-container']}>
      <div className={styles['grid-container']}>
        <div className="md:max-w-[450px]">
          <h2 className={barlowCondensed.className}>
            so, you want to travel to
          </h2>
          <h1>space</h1>
          <p className={barlow.className}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles['explore-container']}>explore</div>
      </div>
    </main>
  );
}
