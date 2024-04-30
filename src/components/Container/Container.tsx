/*
  Componente Container

  Renderiza uma estrutura com a classe "container" e "mx-auto", o que ajuda a padronizar a estrutura
do conteúdo na tela, criando um espaçamento no eixo x e deixando os elementos centralizados.

  O CSS do Container está em './Container.module.css'.
*/
import { ChildrenProps, ClassNames } from '@/../@Types/global';

import styles from './Container.module.css';

const Container: React.FC<ChildrenProps & ClassNames> = ({
  children,
  className,
  ...rest
}) => {
  let containerClassName = styles.space;

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
};

export default Container;
