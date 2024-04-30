/*
  Componente Heading

  Renderiza a parte superior de um alerta. Utilizado no momento pelo EmptyState.

  O CSS do card está em './Card.module.css'.
*/

'use client';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
}: HeadingProps) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
