import { NextResponse } from 'next/server';

// NOTE: Airtable disabled. Returning static pricing data for the site.
export async function GET() {
  const plans = [
    {
      id: 'landing',
      planName: 'Landing Page',
      price: 500,
      currency: 'USD',
      description: 'Modern responsive design, SEO, contact forms',
      features: [
        'Responsive design',
        'SEO optimized',
        'Contact forms',
        '2 revisions included',
      ],
      duration: 'Ready in 2 days',
      popular: false,
      active: true,
      order: 1,
      buttonText: 'Start Landing Page Project →',
    },
    {
      id: 'full-app',
      planName: 'Full Application',
      price: 2500,
      currency: 'USD',
      description: 'Custom app with auth and database',
      features: [
        'Custom web application',
        'User authentication',
        'Database integration',
        'Unlimited revisions',
      ],
      duration: 'Ready in 1 week',
      popular: true,
      active: true,
      order: 2,
      buttonText: 'Start Full App Project →',
    },
  ];
  return NextResponse.json(plans);
}
