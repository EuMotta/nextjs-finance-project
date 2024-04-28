'use client';
import React from 'react';

import { currencyConverter } from '@/utils/Conversions/currencyConverter';

import { HookProps } from '../../../../@Types/global';

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
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Operation Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((transaction: TransactionObject) => {
                const convertedValue = currencyConverter(transaction.value);
                return (
                  <tr key={transaction.id}>
                    <td>{transaction.name}</td>
                    <td>{convertedValue}</td>
                    <td>{transaction.operationType ? 'True' : 'False'}</td>
                    <td>{transaction.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default Transactions;
