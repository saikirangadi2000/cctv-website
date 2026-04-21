import { NextRequest, NextResponse } from 'next/server';
import { getProducts, createProduct } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error('[v0-api] Get products error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
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

    const { name, description, price, imageUrl, category, specs } =
      await request.json();

    if (!name || !description || price === undefined) {
      return NextResponse.json(
        { error: 'Name, description, and price are required' },
        { status: 400 }
      );
    }

    const product = await createProduct(
      name,
      description,
      parseFloat(price),
      imageUrl || '',
      category || '',
      specs || ''
    );

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('[v0-api] Create product error:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
