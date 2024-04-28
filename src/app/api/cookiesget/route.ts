import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import Transaction from '@/models/Transaction';
export async function GET() {
  try {
    let transactions: Transaction[] = [];
    const cookieValue = cookies().get('Transactions');
    if (typeof cookieValue === 'string' || typeof cookieValue === 'object') {
      transactions = JSON.parse(cookieValue.value);
    }

    return NextResponse.json(transactions, { status: 200 });
  } catch {
    return new Response('Error', { status: 400 });
  }
}
