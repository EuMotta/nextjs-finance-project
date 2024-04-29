/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

export type ChildrenProps = {
  children: ReactNode;
};
export type ClassNames = {
  className?: string;
};
export type NavLink = {
  href: string;
  label: string;
};

export type NavbarProps = {
  navLinks: NavLink[];
};

export type HookProps = {
  loading: boolean;
  error?: string;
  data: any;
  fetch: () => void;
};

export type TransactionObject = {
  id: number;
  name: string;
  value: number;
  date: string;
};

export type FormProps = {
  fetch: () => void;
};
export type PageChangeProps = {
  first: number;
  rows: number;
};
