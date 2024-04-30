/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import Transaction from '@/models/Transaction';

export async function GET(request: NextRequest) {
  const url: string | undefined = request.url;
  if (!url) {
    return new Response('URL is undefined', { status: 400 });
  }

  const { searchParams } = new URL(url);
  const id = searchParams.get('id');

  try {
    let transactions: Transaction[] = [];
    const cookieValue = cookies().get('Transactions');
    if (typeof cookieValue === 'string' || typeof cookieValue === 'object') {
      transactions = JSON.parse(cookieValue.value);
    }

    if (id) {
      transactions = transactions.filter(
        (transaction) => transaction.id === parseInt(id),
      );
    }

    return NextResponse.json(transactions, { status: 200 });
  } catch {
    return new Response('Error', { status: 400 });
  }
}
export async function POST(request: any) {
  const data = await request.json();
  const { name, value, date } = data;
  console.log(data);
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
