import * as React from 'react';
import { Navigation } from './navigation';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <Navigation />
      </header>

      <main>{children}</main>

      <footer>
        <div>&copy; Bothy Blend {new Date().getFullYear().toString()}</div>
      </footer>
    </React.Fragment>
  );
};
