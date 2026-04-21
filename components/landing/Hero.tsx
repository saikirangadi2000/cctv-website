'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-50 overflow-hidden py-16 lg:py-28 pt-32" data-purpose="hero-section" id="home">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT: Text block */}
          <div className="max-w-2xl lg:max-w-xl space-y-7 lg:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-brand-light text-brand px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
              <span className="flex h-3 w-3 rounded-full bg-brand animate-pulse"></span>
              10+ YEARS OF TRUSTED EXPERTISE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Secure Your Property with <span className="text-brand">Expert CCTV</span> Solutions
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
              Professional installation of high-quality security cameras and complete surveillance systems for homes, shops, offices, factories & warehouses.
              Trusted by more than 2,500 satisfied clients across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-3">
              <Link href="/login">
                <button className="bg-brand text-white px-9 py-4 rounded-lg font-bold text-lg text-center hover:bg-brand-dark hover:shadow-xl transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 group w-full sm:w-auto">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a
                href="tel:+919541781797"
                className="bg-white text-slate-900 border-2 border-slate-200 px-9 py-4 rounded-lg font-bold text-lg text-center hover:border-brand hover:text-brand hover:shadow-md transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="h-6 w-6" />
                Call Support
              </a>
            </div>
          </div>

          {/* RIGHT: Image block */}
          <div className="relative lg:-mr-6 animate-fade-in-right">
            <div className="absolute -top-10 -right-10 lg:-top-16 lg:-right-16 w-72 h-72 lg:w-96 lg:h-96 bg-brand-light rounded-full blur-3xl opacity-70"></div>

            <div className="relative bg-white p-5 lg:p-7 rounded-2xl shadow-2xl border border-slate-100 max-w-lg mx-auto lg:mx-0 hover:scale-105 transition-transform duration-400">
              <img
                alt="Professional CCTV Camera Installation Example"
                className="rounded-xl w-full h-auto object-cover aspect-[4/3] lg:aspect-[5/4] shadow-inner"
                src="https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=800&q=80"
              />

              <div className="absolute -bottom-6 -left-6 bg-white p-4 lg:p-5 rounded-xl shadow-xl border border-slate-100 hidden md:block hover:scale-105 transition-transform">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Real-time Monitoring</p>
                <p className="text-xl lg:text-2xl font-extrabold text-slate-900">99.9% Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>

      <style jsx>{`
        .brand {
          color: #1c74e9;
        }
        .bg-brand {
          background-color: #1c74e9;
        }
        .bg-brand-light {
          background-color: #ebf4ff;
        }
        .text-brand {
          color: #1c74e9;
        }
        .bg-brand-dark {
          background-color: #155bb5;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        .animate-fade-in-right {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
}
