'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import ProductsManager from '@/components/admin/ProductsManager';
import ServicesManager from '@/components/admin/ServicesManager';

type Section = 'products' | 'services';

export default function AdminPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<Section>('products');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in and is admin
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me', { credentials: 'include' });
        if (!response.ok) {
          router.push('/login');
          return;
        }
        setIsAuthorized(true);
      } catch (error) {
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4"></div>
          <p className="text-slate-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="flex h-screen bg-slate-50">
      <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="flex-1 overflow-auto flex flex-col">
        {/* Header */}
        <header className="bg-white border-b px-8 py-5 flex justify-between items-center sticky top-0 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-800">
            {activeSection === 'products' ? 'Products / Cameras' : 'Services'}
          </h2>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-8">
          {activeSection === 'products' && <ProductsManager />}
          {activeSection === 'services' && <ServicesManager />}
        </main>
      </div>

      <style jsx>{`
        .brand {
          color: #1c74e9;
        }
      `}</style>
    </div>
  );
}
