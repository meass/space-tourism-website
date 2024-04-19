'use client';

import { createContext, useState } from 'react';

interface StateContextProps {
  sharedState: number;
  setSharedState: React.Dispatch<React.SetStateAction<number>>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StateContext = createContext<StateContextProps>({
  sharedState: 0,
  setSharedState: () => {},
  toggle: false,
  setToggle: () => {},
});

export const StateProvider = ({ children }: any) => {
  const [sharedState, setSharedState] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <StateContext.Provider
      value={{ sharedState, setSharedState, toggle, setToggle }}
    >
      {children}
    </StateContext.Provider>
  );
};
