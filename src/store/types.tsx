/**
 * External dependencies.
 */
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface MarketDataProp {
  id: string;
  symbol: string;
  name: string;
  sector: string;
  open: string;
  high: string;
  low: string;
  close: string;
  percentage_change: string;
  volume: string;
  date: string;
}

export interface StockProfileDataProp {
  id: string;
  symbol: string;
  name: string;
  sector: string;
}

export interface UserDataProp {
  isLoggedIn: boolean;
  name: string;
  email: string;
  img_url: string;
}

export interface AppDataContextProp {
  name: string;
  logo: string;
  userAvatar: string;
  userData: UserDataProp;
  stockProfileData: StockProfileDataProp[];
  marketData: MarketDataProp[];
  activeNavItem: string;
  setActiveNavItem: Dispatch<SetStateAction<string>>;
  fetchUserData: () => void;
  prefersDarkMode: boolean;
}

export interface AppDataProviderProp {
  children: ReactNode;
}
