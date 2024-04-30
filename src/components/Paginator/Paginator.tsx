/*
  Componente Paginator

  Renderiza um paginador com botões de navegação. Pode ser utilizado principalmente para listas grandes.

  O CSS do Paginator está em './Paginator .module.css'.
*/
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { PageChangeProps } from '../../../@Types/global';
import Button from '../Button';
import styles from './Paginator.module.css';

type Props = {
  first: number;
  rows: number;
  totalRecords: number;
  onPageChange: (event: PageChangeProps) => void;
};

const Paginator = ({
  first,
  rows,
  totalRecords,
  onPageChange,
  ...rest
}: Props) => {
  const paginatorClassName = styles.paginator;

  const totalPages = Math.ceil(totalRecords / rows);
  const currentPage = first / rows + 1;

  const pages = [];
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    pages.push(i);
  }

  return (
    <div className={paginatorClassName} {...rest}>
      <Button
        className="btn btn-primary"
        disabled={currentPage === 1}
        onClick={() => onPageChange({ first: (currentPage - 2) * rows, rows })}
      >
        <FaArrowLeft />
      </Button>
      <div className="flex justify-center items-center gap-2 col-span-3">
        {pages.map((page) => {
          const active = page === currentPage && styles.active;
          return (
            <Button
              key={page}
              onClick={() => onPageChange({ first: (page - 1) * rows, rows })}
              className={`btn ${active}`}
            >
              {page}
            </Button>
          );
        })}
      </div>
      <Button
        className="btn btn-primary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange({ first: currentPage * rows, rows })}
      >
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Paginator;
