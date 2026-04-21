import { NextRequest, NextResponse } from 'next/server';
import { getServices, createService } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const services = await getServices();
    return NextResponse.json(services);
  } catch (error) {
    console.error('[v0-api] Get services error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user || !user.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized. Admin access required.' },
        { status: 401 }
      );
    }

    const { name, description, price, imageUrl, duration, features } =
      await request.json();

    if (!name || !description || price === undefined) {
      return NextResponse.json(
        { error: 'Name, description, and price are required' },
        { status: 400 }
      );
    }

    const service = await createService(
      name,
      description,
      parseFloat(price),
      imageUrl || '',
      duration || '',
      features || ''
    );

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error('[v0-api] Create service error:', error);
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}
