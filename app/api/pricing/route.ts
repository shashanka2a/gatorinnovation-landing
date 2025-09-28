import { NextResponse } from 'next/server';
import { getPricingPlans } from '../../../lib/airtable';

export async function GET() {
  try {
    const pricingPlans = await getPricingPlans();
    return NextResponse.json(pricingPlans);
  } catch (error: any) {
    console.error('API Error fetching pricing plans:', error);
    return NextResponse.json({ message: error.message || 'Failed to fetch pricing plans' }, { status: 500 });
  }
}
