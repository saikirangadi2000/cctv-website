'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me', { credentials: 'include' });
        setIsLoggedIn(response.ok);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-100 shadow-sm" data-purpose="main-navigation">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand text-white rounded-lg px-3 py-2 font-bold text-sm">
            CCTV
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Sarvanetra</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 font-medium text-slate-600">
          <a className="hover:text-brand transition-colors" href="#home">Home</a>
          <a className="hover:text-brand transition-colors" href="#products">Products</a>
          <a className="hover:text-brand transition-colors" href="#services">Services</a>
          <a className="hover:text-brand transition-colors" href="#about">About</a>
          <a className="hover:text-brand transition-colors" href="#contact">Contact</a>
        </nav>

        {/* CTA / Auth */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/admin">
                <button className="hidden md:inline-block bg-brand text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-dark transition-all shadow-md">
                  Admin Panel
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="hidden md:inline-block text-brand font-semibold hover:text-brand-dark transition-colors">
                  Login
                </button>
              </Link>
              <Link href="/login">
                <button className="bg-brand text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-dark transition-all shadow-md">
                  Get Quote
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }
        .brand {
          color: #1c74e9;
        }
        .bg-brand {
          background-color: #1c74e9;
        }
        .bg-brand-dark {
          background-color: #155bb5;
        }
        .hover:bg-brand-dark:hover {
          background-color: #155bb5;
        }
      `}</style>
    </header>
  );
}
