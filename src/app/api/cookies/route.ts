/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from 'next/headers';

import Transaction from '@/models/Transaction';

export async function POST(request: any) {
  const data = await request.json();
  const { name, value, date } = data;

  try {
    let transactions: Transaction[] = [];

    const cookieValue = cookies().get('Transactions');
    if (typeof cookieValue === 'string' || typeof cookieValue === 'object') {
      transactions = JSON.parse(cookieValue.value);
    }
    const newTransaction = new Transaction(
      transactions.length + 1,
      name,
      value,
      date,
    );

    transactions.push(newTransaction);

    cookies().set({
      name: 'Transactions',
      value: JSON.stringify(transactions),
    });

    return new Response('Transação adicionada com sucesso', { status: 200 });
  } catch {
    return new Response('Erro ao adicionar transação', { status: 422 });
  }
}
