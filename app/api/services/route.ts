import { NextResponse } from 'next/server';

// NOTE: Airtable disabled. Return static services list.
export async function GET() {
  const services = [
    { id: 'mvp', title: 'MVP Build', description: 'From concept to live MVP fast', details: 'Scope, wireframes, build, deploy', icon: '🚀', category: 'Development', priceRange: '$500–$2,500', duration: '1–7 days', active: true, order: 1 },
    { id: 'design', title: 'UI/UX', description: 'Modern, accessible design', details: 'Design systems, components, flows', icon: '🎨', category: 'Design', priceRange: '$300–$1,500', duration: '2–5 days', active: true, order: 2 },
  ];
  return NextResponse.json(services);
}
