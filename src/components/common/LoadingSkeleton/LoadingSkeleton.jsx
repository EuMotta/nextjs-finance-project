import styles from './LoadingSkeleton.module.css';
export default function LoadingSkeleton() {
  return (
    <div className="w-full prose h-screen items-center flex flex-col justify-center">
      <div className="flex gap-5 justify-center items-center">
        <div className="gap-5 p-5">
          <div className="flex flex-col gap-20  justify-center items-center ">
            <span className={styles.kinetic}></span>
            <h1 className="text_gradient text-center">Carregando</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
