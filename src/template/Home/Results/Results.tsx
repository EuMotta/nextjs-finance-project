/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import {
  ModularFirstCard,
  ModularSecondCard,
} from '@/components/Card/ModularCard';
import { useCalcData } from '@/Hooks/useCalculatorData';

import { currencyConverter } from '@/utils/Conversions/currencyConverter';

import { HookProps } from '../../../../@Types/global';

const Results = ({ data }: HookProps) => {
  if (data.loading) {
    return <p className="text-center">Carregando transações...</p>;
  }

  const { yearlyMonthlyTotals } = useCalcData(data);
  if (yearlyMonthlyTotals !== undefined && yearlyMonthlyTotals.length > 0)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {yearlyMonthlyTotals.map((yearData, index) => (
          <ModularFirstCard
            key={index}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-lg font-semibold mb-4">Ano: {yearData.year}</h2>
            <p className="text-sm">
              Total de transações: {yearData.yearlyTotal}
            </p>
            <p className="text-sm">
              Total acumulado: {currencyConverter(yearData.yearlyTotalValue)}
            </p>
            <p className="text-sm">
              Total de receitas:{' '}
              {currencyConverter(yearData.yearlyTotalPositiveValue)}
            </p>
            <p className="text-sm">
              Total de despesas:{' '}
              {currencyConverter(yearData.yearlyTotalNegativeValue)}
            </p>
            <p className="text-sm">
              Média de gastos: {currencyConverter(yearData.yearlyTotalMedia)}
            </p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Gastos por mês</h3>
              <div className="flex flex-col max-h-96 overflow-y-scroll gap-5">
                {yearData.monthlyTotals.map((monthData, idx) => (
                  <ModularSecondCard
                    key={idx}
                    className="bg-gray-100 rounded p-4"
                  >
                    <p className="font-semibold">Mês: {monthData.month}</p>
                    <p>Total de transações: {monthData.total}</p>
                    <p>
                      Total acumulado: {currencyConverter(monthData.totalValue)}
                    </p>
                    <p>
                      Total de receitas:{' '}
                      {currencyConverter(monthData.totalPositiveValue)}
                    </p>
                    <p>
                      Total de despesas:{' '}
                      {currencyConverter(monthData.totalNegativeValue)}
                    </p>
                    <p>
                      Média de gastos: {currencyConverter(monthData.totalMedia)}
                    </p>
                  </ModularSecondCard>
                ))}
              </div>
            </div>
          </ModularFirstCard>
        ))}
      </div>
    );
};

export default Results;
