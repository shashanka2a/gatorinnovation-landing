import { NextResponse } from 'next/server';

// NOTE: Airtable disabled. Return static showcase projects.
export async function GET() {
  const projects = [
    { id: 'gatorex', title: 'GatorEx', category: 'Marketplace', description: 'Student marketplace to buy and sell items', url: 'https://gatorex.shop', imageUrl: '/gatorex.png', alt: 'GatorEx marketplace', status: 'Active', featured: true, order: 1 },
    { id: 'rydify', title: 'Rydify', category: 'Ride Share', description: 'Campus ride sharing platform', url: 'https://rydify.co', imageUrl: '/rydify.png', alt: 'Rydify ride share', status: 'Active', featured: false, order: 2 },
    { id: 'vybr', title: 'Vybr', category: 'Housing', description: 'Student housing discovery platform', url: 'https://vybr.club', imageUrl: '/vybr.png', alt: 'Vybr housing', status: 'Active', featured: false, order: 3 },
  ];
  return NextResponse.json(projects);
}
