import React from 'react';
import { FaList } from 'react-icons/fa';

import { NavbarProps } from '../../../@Types/global';
import Button from '../Button';
import Container from '../Container';
import Logo from '../Logo';
import styles from './Navbar.module.css';

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  return (
    <header className={styles.navbar_content}>
      <Container>
        <div className={styles.navbar_nav}>
          <Button
            className="btn md:hidden"
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <FaList />
          </Button>
          <Logo />
          <nav>
            {navLinks.map((item, index) => (
              <div key={index}>
                <Button href={item.href} className={styles.navLink}>
                  <p>{item.label}</p>
                </Button>
              </div>
            ))}
          </nav>
          <div>
            <Button href="/login">Entrar</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
