import { NextApiRequest } from 'next';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import Transaction from '@/models/Transaction';

export async function GET(request: NextApiRequest) {
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
