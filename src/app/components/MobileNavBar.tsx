'use client';
import { useContext, useEffect, useState } from 'react';
import data from '../data.json';
import { StateContext } from '../ContextProvider';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function MobileNavBar() {
  const { toggle, setToggle } = useContext(StateContext);
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('');
  const { menus } = data;

  useEffect(() => {
    setActiveMenu(pathname);
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
    setToggle(false);
    setActiveMenu(path);
  };

  return (
    <AnimatePresence>
      {toggle && (
        <motion.nav
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.75 }}
          className="w-[65%] h-full fixed top-0 right-0 z-10 text-white menu-container"
        >
          <button
            className="fixed right-0 top-0 p-5 z-20"
            onClick={() => setToggle(false)}
          >
            <img id="btn-close" src="/shared/icon-close.svg" alt="icon-close" />
          </button>
          <ul className="w-full h-full max-w-64 ml-auto pt-24 pl-6">
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
