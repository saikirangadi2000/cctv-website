# CCTV Management System - Full Stack Application

A complete full-stack CCTV and security solutions website with an admin panel for managing products and services.

## Features

✓ **Landing Page** - Professional marketing website with product and service showcases
✓ **Admin Panel** - Full CRUD operations for products and services
✓ **Custom Authentication** - Login/Register with JWT tokens
✓ **Image Upload** - Upload and optimize product/service images
✓ **Responsive Design** - Mobile-friendly Tailwind CSS design
✓ **Database Integration** - Neon PostgreSQL for data persistence

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Neon PostgreSQL
- **Authentication**: Custom JWT-based auth with bcrypt
- **Image Handling**: Sharp for optimization

## Getting Started

### 1. Setup Environment Variables

Create a `.env.local` file in the root directory:

```bash
DATABASE_URL=postgresql://user:password@ep-xxxx.us-east-1.neon.tech/dbname
JWT_SECRET=your-super-secret-key-change-in-production
NODE_ENV=development
```

Get your `DATABASE_URL` from your Neon project dashboard.

### 2. Initialize the Database

Run the database initialization script:

```bash
node scripts/init-db.js
```

This will create three tables:
- `users` - Admin user accounts
- `products` - CCTV cameras and products
- `services` - Installation and maintenance services

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Run the Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000` to see the landing page.

## Project Structure

```
app/
├── page.tsx              # Landing page
├── login/page.tsx        # Login/Register page
├── admin/page.tsx        # Admin dashboard
├── api/
│   ├── auth/            # Authentication endpoints
│   ├── products/        # Product CRUD endpoints
│   ├── services/        # Service CRUD endpoints
│   └── upload/          # Image upload endpoint
│
components/
├── landing/             # Landing page components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductsGrid.tsx
│   ├── ServicesGrid.tsx
│   └── Footer.tsx
│
└── admin/               # Admin components
    ├── AdminSidebar.tsx
    ├── ProductsManager.tsx
    ├── ProductForm.tsx
    ├── ServicesManager.tsx
    └── ServiceForm.tsx

lib/
├── db.ts                # Database queries
├── auth.ts              # Authentication utilities
└── upload.ts            # Image upload utilities

scripts/
└── init-db.js           # Database initialization
```

## Usage

### Landing Page

1. Visit `http://localhost:3000`
2. Browse products and services
3. Click "Get Quote" to access login page

### Admin Panel

1. Click "Get Quote" or "Login" on the landing page
2. **Register** a new admin account
3. Access the **Admin Panel** to manage:
   - **Products**: Add, edit, delete CCTV cameras
   - **Services**: Add, edit, delete services

### Creating Products

1. Go to Admin Panel → Products
2. Click "Add New Product"
3. Fill in details:
   - Product Name
   - Description
   - Price (in ₹)
   - Category (Wifi, Outdoor, Indoor, etc.)
   - Specifications
   - Upload image
4. Click "Save Product"

### Creating Services

1. Go to Admin Panel → Services
2. Click "Add New Service"
3. Fill in details:
   - Service Name
   - Description
   - Price
   - Duration
   - Features
   - Upload image
4. Click "Save Service"

## API Endpoints

### Authentication

- `POST /api/auth/register` - Create new admin account
- `POST /api/auth/login` - Login admin
- `POST /api/auth/logout` - Logout admin
- `GET /api/auth/me` - Check authentication status

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Services

- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create service (admin only)
- `PUT /api/services/:id` - Update service (admin only)
- `DELETE /api/services/:id` - Delete service (admin only)

### Upload

- `POST /api/upload` - Upload image (admin only)

## Database Schema

### Users Table
```sql
- id (primary key)
- email (unique)
- password_hash
- name
- is_admin (boolean)
- created_at
- updated_at
```

### Products Table
```sql
- id (primary key)
- name
- description
- price
- image_url
- category
- specs
- created_at
- updated_at
```

### Services Table
```sql
- id (primary key)
- name
- description
- price
- image_url
- duration
- features
- created_at
- updated_at
```

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel settings:
   - `DATABASE_URL`
   - `JWT_SECRET`
4. Deploy

Vercel will automatically detect Next.js and build/deploy your app.

## Security Notes

⚠️ **Important**: 
- Change `JWT_SECRET` in production to a strong, random value
- Use HTTPS in production
- Keep database credentials secure
- Never commit `.env.local` to version control

## Troubleshooting

### Database Connection Error
- Verify `DATABASE_URL` is correct
- Check Neon project is active
- Ensure IP whitelist includes your connection

### Images Not Uploading
- Check `/public/uploads` directory exists
- Verify file permissions
- Maximum file size is 5MB

### Admin Routes Not Working
- Ensure you're logged in as admin
- Check auth token cookie is being set
- Clear browser cookies and re-login

## License

MIT
