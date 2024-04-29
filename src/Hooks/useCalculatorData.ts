import { TransactionObject } from '../../@Types/global';

export function useCalcData(data: TransactionObject[]) {
  const total = data.length;
  return {
    total,
  };
}
