import sharp from 'sharp';

export async function optimizeImage(buffer: Buffer): Promise<Buffer> {
  try {
    return await sharp(buffer)
      .resize(800, 600, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toBuffer();
  } catch (error) {
    console.error('[v0-upload] Image optimization error:', error);
    throw new Error('Failed to optimize image');
  }
}

export function generateFileName(originalName: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const extension = originalName.split('.').pop() || 'webp';
  return `${timestamp}-${random}.${extension}`;
}

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
];

export function validateImageFile(
  mimeType: string,
  size: number
): { valid: boolean; error?: string } {
  if (!ALLOWED_MIME_TYPES.includes(mimeType)) {
    return { valid: false, error: 'Invalid image type. Use JPEG, PNG, WebP, or GIF.' };
  }
  if (size > MAX_FILE_SIZE) {
    return { valid: false, error: 'Image size exceeds 5MB limit' };
  }
  return { valid: true };
}
