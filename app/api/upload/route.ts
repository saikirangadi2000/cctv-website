import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { validateImageFile, generateFileName, optimizeImage } from '@/lib/upload';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user || !user.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized. Admin access required.' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file
    const validation = validateImageFile(file.type, file.size);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    // Read file buffer
    const buffer = await file.arrayBuffer();
    const imageBuffer = Buffer.from(buffer);

    // Optimize image
    let optimizedBuffer: Buffer;
    try {
      optimizedBuffer = await optimizeImage(imageBuffer);
    } catch (error) {
      console.warn('[v0-api] Image optimization failed, using original:', error);
      optimizedBuffer = imageBuffer;
    }

    // Generate filename
    const fileName = generateFileName(file.name);
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    // Create uploads directory if it doesn't exist
    try {
      await fs.mkdir(uploadDir, { recursive: true });
    } catch (error) {
      console.warn('[v0-api] Could not create upload directory:', error);
    }

    // Save file
    const filePath = path.join(uploadDir, fileName);
    await fs.writeFile(filePath, optimizedBuffer);

    // Return URL
    const imageUrl = `/uploads/${fileName}`;

    return NextResponse.json(
      {
        imageUrl,
        fileName,
        message: 'Image uploaded successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0-api] Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}
