/* 
  Hooke para efetuar os calculos dos dados retornados das transações
*/

/* eslint-disable @typescript-eslint/no-explicit-any */
import { media, sum } from '@/utils/Counts';

import { TransactionObject } from '../../@Types/global';

export function useCalcData(data: TransactionObject[] | undefined) {
  if (!Array.isArray(data)) {
    return {
      total: 0,
      totalValue: 0,
    };
  }

  const total = data.length;
  const totalValue = sum(data.map((item) => item.value || 0));
  const totalPositiveValue = sum(
    data.map((item) => (item.value > 0 ? item.value : 0)),
  );
  const totalNegativeValue = sum(
    data.map((item) => (item.value < 0 ? item.value : 0)),
  );
  const totalMedia = media(totalValue, data.length);

  const dataByYearAndMonth = data.reduce((acc: Record<number, any>, item) => {
    const date = new Date(new Date(item.date).toISOString().split('T')[0]);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(item);
    return acc;
  }, {});

  const yearlyMonthlyTotals = Object.keys(dataByYearAndMonth).map((year) => {
    const yearlyData = dataByYearAndMonth[Number(year)];
    const monthlyTotals = Object.keys(yearlyData).map((month) => {
      const monthlyData = yearlyData[Number(month)];
      return {
        month,
        total: monthlyData.length,
        totalValue: sum(
          monthlyData.map((item: TransactionObject) => item.value || 0),
        ),
        totalPositiveValue: sum(
          monthlyData.map((item: TransactionObject) =>
            item.value > 0 ? item.value : 0,
          ),
        ),
        totalNegativeValue: sum(
          monthlyData.map((item: TransactionObject) =>
            item.value < 0 ? item.value : 0,
          ),
        ),
        totalMedia: media(
          sum(monthlyData.map((item: TransactionObject) => item.value || 0)),
          monthlyData.length,
        ),
      };
    });

    const yearlyTotal = monthlyTotals.reduce(
      (acc, curr) => acc + curr.total,
      0,
    );
    const yearlyTotalValue = monthlyTotals.reduce(
      (acc, curr) => acc + curr.totalValue,
      0,
    );
    const yearlyTotalPositiveValue = monthlyTotals.reduce(
      (acc, curr) => acc + curr.totalPositiveValue,
      0,
    );
    const yearlyTotalNegativeValue = monthlyTotals.reduce(
      (acc, curr) => acc + curr.totalNegativeValue,
      0,
    );
    const yearlyTotalMedia = media(yearlyTotalValue, yearlyTotal);

    return {
      year,
      yearlyTotal,
      yearlyTotalValue,
      yearlyTotalPositiveValue,
      yearlyTotalNegativeValue,
      yearlyTotalMedia,
      monthlyTotals,
    };
  });

  return {
    total,
    totalValue,
    totalMedia,
    totalPositiveValue,
    totalNegativeValue,
    yearlyMonthlyTotals,
  };
}
