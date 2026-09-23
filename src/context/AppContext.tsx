"use client"
import { TApp } from "@/types/apps.type";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TAppContext = {
  installedApps: TApp[];
  setInstalledApps: Dispatch<SetStateAction<TApp[]>>;
};

export const AppContext = createContext<TAppContext>({
  installedApps: [],
  setInstalledApps: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [installedApps, setInstalledApps] = useState<TApp[]>([]);

  const sharedData = {
    installedApps,
    setInstalledApps,
  };
  return (
    <AppContext.Provider value={sharedData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
