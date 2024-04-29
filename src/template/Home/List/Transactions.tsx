'use client';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FcBearish, FcBullish } from 'react-icons/fc';

import Button from '@/components/Button';
import Paginator from '@/components/Paginator/Paginator';
import Section from '@/components/Section';

import { currencyConverter } from '@/utils/Conversions/currencyConverter';

import {
  HookProps,
  PageChangeProps,
  TransactionObject,
} from '../../../../@Types/global';
import styles from './Transactions.module.css';
const Transactions = ({ fetch, loading, error, data }: HookProps) => {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(4);

  if (loading) {
    return <p className="text-center">Carregando transações...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (data.length === 0) {
    return (
      <div className="text-center">
        <p>Nenhuma transação cadastrada</p>
      </div>
    );
  }

  const onPageChange = (event: PageChangeProps) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  return (
    <Section className={styles.table_section}>
      <div className="flex justify-center">
        <Button onClick={() => fetch()} className="btn btn-wide btn-primary">
          Atualizar
        </Button>
      </div>
      <table>
        <thead className="">
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th className="w-48 !text-center">Tipo de operação</th>
            <th>Data</th>
            <th className="w-48 !text-center">Opções</th>
          </tr>
        </thead>
        <tbody>
          {data
            .slice(first, first + rows)
            .map((transaction: TransactionObject) => {
              const convertedValue = currencyConverter(transaction.value);
              return (
                <tr key={transaction.id}>
                  <td>{transaction.name}</td>
                  <td>{convertedValue}</td>
                  <td className="flex justify-center w-48 items-center">
                    {transaction.value > 0 && (
                      <p className="flex gap-2">
                        <FcBullish size={20} /> Receita
                      </p>
                    )}
                    {transaction.value < 0 && (
                      <p className="flex gap-2">
                        <FcBearish size={20} /> Despesa
                      </p>
                    )}
                  </td>
                  <td>{transaction.date}</td>
                  <td className="flex justify-center items-center">
                    <Button
                      icon={<FaEye />}
                      href={`/transacao/${transaction.id}`}
                    >
                      Visualizar
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4">
        <Paginator
          first={first}
          rows={rows}
          onPageChange={onPageChange}
          totalRecords={data.length}
        />
      </div>
    </Section>
  );
};

export default Transactions;
