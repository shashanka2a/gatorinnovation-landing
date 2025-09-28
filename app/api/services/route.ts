import { NextResponse } from 'next/server';
import { getServices } from '../../../lib/airtable';

export async function GET() {
  try {
    const services = await getServices();
    return NextResponse.json(services);
  } catch (error: any) {
    console.error('API Error fetching services:', error);
    return NextResponse.json({ message: error.message || 'Failed to fetch services' }, { status: 500 });
  }
}
