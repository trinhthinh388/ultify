import React from 'react';
import classNames from 'classnames';
import { Raleway, Open_Sans } from 'next/font/google';

export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});
export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
});

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={classNames(raleway.variable, openSans.variable)}>
      {children}
    </main>
  );
};
