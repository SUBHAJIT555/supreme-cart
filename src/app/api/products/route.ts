import { NextResponse } from 'next/server';
import { getSiteNumber } from '@/lib/siteConfig';
import { selectProducts } from '@/lib/productSelector';

export async function GET() {
  try {
    const siteNumber = getSiteNumber();
    const products = selectProducts(siteNumber);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
