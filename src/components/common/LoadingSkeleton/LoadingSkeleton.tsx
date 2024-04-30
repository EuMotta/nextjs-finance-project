/*
  Componente de Carregamento

  Utilizado como tela de carregamento do Next.js. Sempre que houver uma troca de rota, o componente é renderizado.


  O CSS do componente está em './LoadingSkeleton.module.css'.
*/
import styles from './LoadingSkeleton.module.css';
export default function LoadingSkeleton() {
  return (
    <div className={styles.loading_section}>
      <div className={styles.loading_content}>
        <div className="gap-5 p-5">
          <div className={styles.loading_loading}>
            <span className={styles.kinetic}></span>
            <h1>Carregando</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
