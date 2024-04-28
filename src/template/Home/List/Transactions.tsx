'use client';
import { FaEye } from 'react-icons/fa';
import { FcBearish, FcBullish } from 'react-icons/fc';

import Button from '@/components/Button';
import Section from '@/components/Section';

import { currencyConverter } from '@/utils/Conversions/currencyConverter';

import { HookProps } from '../../../../@Types/global';
import styles from './Transactions.module.css';
interface TransactionObject {
  id: number;
  name: string;
  value: number;
  date: string;
  operationType: boolean;
}
const Transactions = async ({ loading, error, data }: HookProps) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (data.length === 0) {
    return <p>Lista vazia</p>;
  }
  if (data.length > 0) {
    return (
      <Section className={styles.table_section}>
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
            {data.map((transaction: TransactionObject) => {
              const convertedValue = currencyConverter(transaction.value);
              return (
                <tr key={transaction.id}>
                  <td>{transaction.name}</td>
                  <td>{convertedValue}</td>
                  <td className="flex justify-center w-48 items-center">
                    {transaction.operationType ? (
                      <FcBullish size={20} />
                    ) : (
                      <FcBearish size={20} />
                    )}
                  </td>
                  <td>{transaction.date}</td>
                  <td className="flex justify-center items-center">
                    <Button icon={<FaEye />}>Visualizar</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Section>
    );
  }
};

export default Transactions;
