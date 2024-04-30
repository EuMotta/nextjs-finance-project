'use client';
import React from 'react';
import { FcBearish, FcBullish } from 'react-icons/fc';

import Button from '@/components/Button';
import { ModularFirstCard } from '@/components/Card/ModularCard';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { useData } from '@/Hooks/useData';

import { currencyConverter } from '@/utils/Conversions/currencyConverter';

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Props) => {
  const {
    fetchData,
    loading,
    error,
    data: transaction,
  } = useData({ url: '/api/cookies', reverse: false, id: params.id });
  if (loading) {
    return <div>Carregando...</div>;
  }
  if (error) {
    return <div>Erro</div>;
  }
  const convertedValue = currencyConverter(transaction.value);
  return (
    <Section>
      <Container className="grid grid-cols-3">
        <ModularFirstCard className="max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Detalhes da Transação</h1>
          <div className="mb-4">
            <p className="font-semibold">Nome:</p>
            <p>{transaction.name}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Valor:</p>
            <p>{convertedValue}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Tipo de Operação:</p>
            {transaction.value > 0 && (
              <p className="flex gap-2">
                <FcBullish size={20} /> Receita
              </p>
            )}
            {transaction.value < 0 && (
              <p className="flex gap-2">
                <FcBearish size={20} /> Despeza
              </p>
            )}
          </div>
          <div className="mb-4">
            <p className="font-semibold">Data:</p>
            <p>{transaction.date}</p>
          </div>
          <Button className="w-full btn-primary" onClick={() => fetchData()}>
            Atualizar
          </Button>
        </ModularFirstCard>
      </Container>
    </Section>
  );
};

export default Page;
