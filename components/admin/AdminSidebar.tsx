'use client';

import { useRouter } from 'next/navigation';
import { LogOut, Package, Wrench } from 'lucide-react';

type Section = 'products' | 'services';

interface AdminSidebarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export default function AdminSidebar({
  activeSection,
  setActiveSection,
}: AdminSidebarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    router.push('/');
  };

  return (
    <div className="w-72 bg-white border-r border-slate-200 shadow-sm flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="bg-brand text-white rounded-lg px-3 py-2 font-bold text-sm">
            CCTV
          </div>
          <div>
            <p className="font-bold text-slate-900">Sarvanetra</p>
            <p className="text-xs text-slate-500 tracking-widest">ADMIN PANEL</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <button
          onClick={() => setActiveSection('products')}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-left font-medium transition-colors ${
            activeSection === 'products'
              ? 'bg-brand/10 text-brand'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Package className="w-5 h-5" />
          Products / Cameras
        </button>

        <button
          onClick={() => setActiveSection('services')}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-left font-medium transition-colors ${
            activeSection === 'services'
              ? 'bg-brand/10 text-brand'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Wrench className="w-5 h-5" />
          Services
        </button>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 py-3 rounded-xl text-sm font-medium transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      <style jsx>{`
        .brand {
          color: #1c74e9;
        }
        .bg-brand {
          background-color: #1c74e9;
        }
        .bg-brand\/10 {
          background-color: rgba(28, 116, 233, 0.1);
        }
      `}</style>
    </div>
  );
}
