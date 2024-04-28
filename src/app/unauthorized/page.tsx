import EmptyState from '@/components/EmptyState';

const UnauthorizeState = () => {
  return (
    <EmptyState
      title="Calma ai!"
      subtitle="Você não tem permissão para acessar esta página"
      showReset
      label="Voltar para o inicio"
    />
  );
};

export default UnauthorizeState;
