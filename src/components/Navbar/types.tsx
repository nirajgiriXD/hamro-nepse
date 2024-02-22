/**
 * External dependencies.
 */
import { Dispatch, SetStateAction } from "react";

export interface SubMenuItemProp {
  label: string;
  href: string;
  icon: JSX.Element;
  description: string;
}

export interface NavItemProp {
  label: string;
  href: string;
  subMenuItems: SubMenuItemProp[];
  activeNavItem: string;
  setActiveNavItem: Dispatch<SetStateAction<string>>;
}

export interface SubMenuProps {
  handleDropdownMouseOver: () => void;
  handleDropdownMouseOut: () => void;
  subMenuItems: SubMenuItemProp[];
}

export interface LoginandSignupItemProp {
  href: string;
}

export interface UserProfileDropdownProps {
  handleOnClick: () => void;
}

export interface SuggestionProp {
  label: string;
  value: string;
}
