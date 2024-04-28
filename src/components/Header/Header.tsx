import React from 'react';

import { publicNavLinks } from '@/constants';

import Navbar from '../Navbar';

const Header = () => {
  return (
    <div>
      <Navbar navLinks={publicNavLinks} />
    </div>
  );
};

export default Header;
