import { NextResponse, NextRequest } from 'next/server'
import { PURCHASES_URL } from '@/constants/index'
import { toErrorWithMessage } from '@/utils/toErrorWithMessage';
import formatPurchases from '@/utils/formatPurchases';
import sortPurchasesByDate from '@/utils/sortPurchasesByDate';

export async function GET(request: NextRequest) {
  try {
    const sortBy = request.nextUrl.searchParams.get('sort') || 'desc';
    const res = await fetch(PURCHASES_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error('Failed to retrieve purchases. Please try again.')
    }

    const data = await res.json()
    const formattedPurchases = formatPurchases(data);
    const sortedPurchases = sortPurchasesByDate(formattedPurchases, sortBy);
        
    return NextResponse.json(sortedPurchases)
  } catch(err) {
    return NextResponse.json({ error: toErrorWithMessage(err).message, status: 500 })
  }
}