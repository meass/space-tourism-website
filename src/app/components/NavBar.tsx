'use client';
import data from '@/app/data.json';
import { barlow } from '../fonts';
import { useState, useEffect, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { StateContext } from '../ContextProvider';

export default function NavBar() {
  const { setToggle } = useContext(StateContext);
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('');
  const { menus } = data;

  const handleNavigation = (path: string) => {
    setActiveMenu(path);
    router.push(path);
  };

  useEffect(() => {
    setActiveMenu(pathname);
  }, []);

  return (
    <nav className="fixed lg:pl-10 text-white w-full max-w-[330px] lg:max-w-[1385px] 2xl:left-1/2 2xl:-translate-x-1/2 md:max-w-[730px] md:right-0 md:translate-x-0 max-md:left-1/2 max-md:-translate-x-1/2 py-5 md:py-0 flex items-center justify-between">
      <img
        className="max-w-10 md:max-w-full"
        src="/shared/logo.svg"
        alt="logo"
      />
      <button onClick={() => setToggle(true)}>
        <img
          className="md:hidden block"
          src="/shared/icon-hamburger.svg"
          alt="icon-hamburger"
        />
      </button>
      <div className="menu-container md:block hidden w-full max-w-[450px] lg:max-w-[830px] bg-gray-500">
        <ul
          className={`${barlow.className} uppercase flex gap-9 lg:gap-12 max-w-[356px] lg:max-w-[532px] mx-auto`}
        >
          {menus.map((menu) => (
            <li
              key={menu.name}
              className={`${
                activeMenu === menu.url && 'border-b-2'
              } text-sm lg:text-base py-10`}
            >
              <button onClick={() => handleNavigation(menu.url)}>
                <span className="hidden lg:inline pr-1">{menu.mark}</span>
                {menu.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
