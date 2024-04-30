/*
  Componente ScrollUp

  Renderiza um botão no canto inferior direito da tela quando o usuário rola a página.
  Ao clicar no botão, ele é encaminhado para o topo.

  O CSS do ScrollUp está em './ScrollUp.module.css'.
*/

'use client';

import { useState, useEffect } from 'react';
import { FcUp } from 'react-icons/fc';

import styles from './ScrollUp.module.css';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollButton} ${isVisible ? styles.visible : ''}`}
    >
      <FcUp className={styles.icon} size={23} />
    </button>
  );
};

export default ScrollUp;
