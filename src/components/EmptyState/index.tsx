/*
  Componente EmptyState

  Renderiza uma mensagem de aviso caso aconteça algum erro na página ou caso acesse uma rota não existente.
  Pode ser utilizado para filtrar qualquer tipo de erro ou problema, mantendo um padrão no tratamento de erros.

  O componente pode receber um título, um subtítulo e um botão de reset.

  O título e o subtítulo são opcionais, mas caso não sejam passados, o componente renderiza um título padrão.

  O botão de reset é opcional, mas caso seja passado, o componente renderiza um botão de reset.

  O reset tem o objetivo de tentar novamente renderizar a página.

*/

'use client';

import { useRouter } from 'next/navigation';

import Button from '../Button';
import Heading from '../Header/Heading';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  label?: string;
  reset?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Aconteceu um problema!',
  subtitle = 'Não sei ainda o que é, mas vou descobrir!',
  label = 'Tente novamente',
  showReset,
  reset,
}: EmptyStateProps) => {
  const router = useRouter();

  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        justify-evenly 
        items-center 
      "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="flex justify-center items-center gap-5">
        {showReset && <Button onClick={() => reset && reset()}>{label}</Button>}
        <Button onClick={() => router.push('/')}>Voltar</Button>
      </div>
    </div>
  );
};

export default EmptyState;
