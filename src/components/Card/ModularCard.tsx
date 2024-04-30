/*
Componente ModularCard

Renderiza três cards que podem ser estilizados e usados para criar uma estrutura padronizada no projeto.

O CSS do card está em './Card.module.css'.
*/

import { ChildrenProps, ClassNames } from '../../../@Types/global';
import styles from './Card.module.css';

type Props = ChildrenProps & ClassNames;
const ModularFirstCard = ({ children, className, ...rest }: Props) => {
  let modularCardClassName = styles.modularFirstCard;

  if (className) {
    modularCardClassName = `${modularCardClassName} ${className}`;
  }

  return (
    <div className={modularCardClassName} {...rest}>
      {children}
    </div>
  );
};
const ModularSecondCard = ({ children, className, ...rest }: Props) => {
  let modularCardClassName = styles.modularSecondCard;

  if (className) {
    modularCardClassName = `${modularCardClassName} ${className}`;
  }

  return (
    <div className={modularCardClassName} {...rest}>
      {children}
    </div>
  );
};
const ModularThirdCard = ({ children, className, ...rest }: Props) => {
  let modularCardClassName = styles.modularThirdCard;

  if (className) {
    modularCardClassName = `${modularCardClassName} ${className}`;
  }

  return (
    <div className={modularCardClassName} {...rest}>
      {children}
    </div>
  );
};

export { ModularFirstCard, ModularSecondCard, ModularThirdCard };
