import { NextRequest, NextResponse } from 'next/server';
import { createContactSubmission } from '../../../lib/airtable';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newSubmission = await createContactSubmission(body);
    return NextResponse.json(newSubmission, { status: 201 });
  } catch (error: any) {
    console.error('API Error creating contact submission:', error);
    return NextResponse.json({ message: error.message || 'Failed to create contact submission' }, { status: 500 });
  }
}
