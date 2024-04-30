/* 
  Contadores para realizar calculos mais comuns em projetos.
*/

export function isInStock(data: number) {
  return data > 0 ? true : false;
}

export function belowMinimumStock(qty: number, threshold: number) {
  return qty < threshold;
}
export function sum(data: number[]): number {
  return data.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}

export function media(value: number, qty: number) {
  return value / qty;
}
