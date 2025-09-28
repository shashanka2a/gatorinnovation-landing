import { NextResponse } from 'next/server';
import { getProjects } from '../../../lib/airtable';

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error: any) {
    console.error('API Error fetching projects:', error);
    return NextResponse.json({ message: error.message || 'Failed to fetch projects' }, { status: 500 });
  }
}
