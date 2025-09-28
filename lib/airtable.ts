import Airtable from 'airtable';

// Initialize Airtable client with fallback for build time
const getAirtableBase = () => {
  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
    return null;
  }
  return new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
};

// Type definitions for our data structures
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  imageUrl?: string;
  alt: string;
  status: string;
  featured: boolean;
  order: number;
  createdDate?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
  category: string;
  priceRange: string;
  duration: string;
  active: boolean;
  order: number;
}

export interface PricingPlan {
  id: string;
  planName: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  duration: string;
  popular: boolean;
  active: boolean;
  order: number;
  buttonText: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budgetRange: string;
  message: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Completed';
  source: string;
  createdDate: string;
  assignedTo?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  linkedin?: string;
  github?: string;
  photo?: string;
  active: boolean;
  order: number;
}

// Generic function to fetch records from Airtable
async function fetchRecords<T>(tableName: string, transform: (record: any) => T): Promise<T[]> {
  try {
    const base = getAirtableBase();
    if (!base) {
      console.warn(`Airtable not configured. Skipping ${tableName} fetch.`);
      return [];
    }

    const records = await base(tableName).select({
      sort: [{ field: 'Order', direction: 'asc' }]
    }).all();

    return records.map(transform);
  } catch (error) {
    console.error(`Error fetching ${tableName}:`, error);
    return [];
  }
}

// Transform functions for each table
const transformProject = (record: any): Project => ({
  id: record.id,
  title: record.get('Title') || '',
  category: record.get('Category') || '',
  description: record.get('Description') || '',
  url: record.get('URL') || '',
  imageUrl: record.get('Image')?.[0]?.url || '',
  alt: record.get('Alt Text') || '',
  status: record.get('Status') || 'Active',
  featured: record.get('Featured') || false,
  order: record.get('Order') || 0,
  createdDate: record.get('Created Date') || new Date().toISOString(),
});

const transformService = (record: any): Service => ({
  id: record.id,
  title: record.get('Title') || '',
  description: record.get('Description') || '',
  details: record.get('Details') || '',
  icon: record.get('Icon') || '',
  category: record.get('Category') || '',
  priceRange: record.get('Price Range') || '',
  duration: record.get('Duration') || '',
  active: record.get('Active') || false,
  order: record.get('Order') || 0,
});

const transformPricingPlan = (record: any): PricingPlan => ({
  id: record.id,
  planName: record.get('Plan Name') || '',
  price: record.get('Price') || 0,
  currency: record.get('Currency') || 'USD',
  description: record.get('Description') || '',
  features: record.get('Features') ? JSON.parse(record.get('Features')) : [],
  duration: record.get('Duration') || '',
  popular: record.get('Popular') || false,
  active: record.get('Active') || false,
  order: record.get('Order') || 0,
  buttonText: record.get('Button Text') || '',
});

const transformContactSubmission = (record: any): ContactSubmission => ({
  id: record.id,
  name: record.get('Name') || '',
  email: record.get('Email') || '',
  company: record.get('Company') || '',
  phone: record.get('Phone') || '',
  projectType: record.get('Project Type') || '',
  budgetRange: record.get('Budget Range') || '',
  message: record.get('Message') || '',
  status: record.get('Status') || 'New',
  source: record.get('Source') || '',
  createdDate: record.get('Created Date') || new Date().toISOString(),
  assignedTo: record.get('Assigned To') || '',
});

const transformTeamMember = (record: any): TeamMember => ({
  id: record.id,
  name: record.get('Name') || '',
  role: record.get('Role') || '',
  bio: record.get('Bio') || '',
  email: record.get('Email') || '',
  linkedin: record.get('LinkedIn') || '',
  github: record.get('GitHub') || '',
  photo: record.get('Photo')?.[0]?.url || '',
  active: record.get('Active') || false,
  order: record.get('Order') || 0,
});

// Exported functions to fetch data
export async function getProjects(): Promise<Project[]> {
  return fetchRecords('Projects', transformProject);
}

export async function getServices(): Promise<Service[]> {
  return fetchRecords('Services', transformService);
}

export async function getPricingPlans(): Promise<PricingPlan[]> {
  return fetchRecords('Pricing Plans', transformPricingPlan);
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return fetchRecords('Team Members', transformTeamMember);
}

// Create a new contact submission
export async function createContactSubmission(data: Omit<ContactSubmission, 'id' | 'createdDate' | 'status'>): Promise<ContactSubmission> {
  try {
    const base = getAirtableBase();
    if (!base) {
      throw new Error('Airtable not configured');
    }

    const record = await base('Contact Submissions').create({
      'Name': data.name,
      'Email': data.email,
      'Company': data.company || '',
      'Phone': data.phone || '',
      'Project Type': data.projectType,
      'Budget Range': data.budgetRange,
      'Message': data.message,
      'Source': data.source,
      'Assigned To': data.assignedTo || '',
      'Created Date': new Date().toISOString()
    });

    return transformContactSubmission(record);
  } catch (error) {
    console.error('Error creating contact submission:', error);
    throw error;
  }
}

// Update contact submission status
export async function updateContactStatus(id: string, status: ContactSubmission['status'], assignedTo?: string): Promise<void> {
  try {
    const base = getAirtableBase();
    if (!base) {
      throw new Error('Airtable not configured');
    }

    await base('Contact Submissions').update(id, {
      'Status': status,
      'Assigned To': assignedTo || ''
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    throw error;
  }
}

// Get contact submissions with filtering
export async function getContactSubmissions(status?: string): Promise<ContactSubmission[]> {
  try {
    const base = getAirtableBase();
    if (!base) {
      console.warn('Airtable not configured. Skipping contact submissions fetch.');
      return [];
    }

    let filter = '';
    if (status) {
      filter = `{Status} = "${status}"`;
    }

    const records = await base('Contact Submissions').select({
      filterByFormula: filter,
      sort: [{ field: 'Created Date', direction: 'desc' }]
    }).all();

    return records.map(transformContactSubmission);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return [];
  }
}

// Cache configuration for Next.js
export const revalidate = 3600; // Revalidate every hour
