import { NextResponse } from 'next/server';
import { getTeamMembers } from '../../../lib/airtable';

export async function GET() {
  try {
    const teamMembers = await getTeamMembers();
    return NextResponse.json(teamMembers);
  } catch (error: any) {
    console.error('API Error fetching team members:', error);
    return NextResponse.json({ message: error.message || 'Failed to fetch team members' }, { status: 500 });
  }
}
