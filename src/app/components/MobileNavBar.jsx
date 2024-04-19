'use client';
import { useContext, useEffect, useState } from 'react';
import { menus } from '../data.json';
import { StateContext } from '../ContextProvider';
import { usePathname, useRouter } from 'next/navigation';

export default function MobileNavBar() {
  const { toggle, setToggle } = useContext(StateContext);
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    setActiveMenu(pathname);
  }, []);

  const handleNavigation = (path) => {
    router.push(path);
    setToggle(false);
    setActiveMenu(path);
  };
  return (
    <nav
      className={`${
        toggle ? 'visible' : 'invisible'
      } w-full h-full fixed top-0 z-10 text-white`}
    >
      <button
        className="fixed right-0 top-0 p-5 z-20"
        onClick={() => setToggle(false)}
      >
        <img id="btn-close" src="/shared/icon-close.svg" alt="icon-close" />
      </button>
      <ul
        className={`${
          toggle ? 'visible animate-fade-left' : 'invisible'
        } menu-container w-full h-full max-w-64 ml-auto pt-24 pl-6`}
      >
        {menus.map((menu) => (
          <li
            className={`${
              activeMenu === menu.url && `border-r-4`
            } mt-6 text-base uppercase`}
            key={menu.name}
          >
            <button onClick={() => handleNavigation(menu.url)}>
              <span className="pr-2">{menu.mark}</span>
              {menu.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
