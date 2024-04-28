export function currencyConverter(amount: number) {
  const numberAmount = Number(amount);
  if (isNaN(numberAmount)) {
    return 'Valor inválido';
  }
  const formattedAmount = numberAmount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formattedAmount;
}
