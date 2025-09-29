import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({ ok: true, received: body }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Invalid payload' }, { status: 400 });
  }
}
