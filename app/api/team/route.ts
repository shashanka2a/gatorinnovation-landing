import { NextResponse } from 'next/server';

// NOTE: Airtable disabled. Return static team members.
export async function GET() {
  const teamMembers = [
    { id: '1', name: 'Shashank Jagannatham', role: 'Founder', bio: 'Product + Engineering', email: 'hello@gatorinnovation.com', active: true, order: 1 },
  ];
  return NextResponse.json(teamMembers);
}
