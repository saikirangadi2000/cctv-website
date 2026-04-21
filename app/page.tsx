'use client';

import { useState } from 'react';
import Image from 'next/image';
import cctvLogo from '../public/cctv-logo.png';

// Define types for our items
type ProductOrService = {
  id: string;
  title: string;
  description: string;
  image: string;
  shortDesc: string;
};

export default function SarvanetraLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirements: '',
  });

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ProductOrService | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', requirements: '' });
  };

  const scrollToSection = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (item: ProductOrService) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const whatsappNumber = "919063835719";
  const whatsappMessage = "Hi Sarvanetra, I would like to request a quote for security solutions.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Data for Products
  const products: ProductOrService[] = [
    {
      id: 'p1',
      title: 'Mini Wifi Camera',
      shortDesc: 'Compact design for discreet monitoring.',
      description: 'Perfect for indoor use, this compact camera offers high-definition video discreetly. Easy to install and connects directly to your WiFi for remote viewing.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6HAq3WhaVvTlG40emFisSMatztxkGGp00O_NXqqWTSdPAZIIG6uOaoI1jO9jZu-dcyjR-rQc15soT89hEVeISLO_oQ7AEQ3CC7y7xgDWTs8lnLo3XSXAfooqRA1ah8T6qbedg42MpExLg61YpBobiDoo8o_qJ7T8imkq6jNctxpTlhsjwoWBW_TbVusePg7f_tMQwheH2rgq2HEKcBMycKvZ5WKFFAicDXDLooRuexwaRq3lpxupznI5UKN-UUp4lY2XnedAIBqI'
    },
    {
      id: 'p2',
      title: 'Bullet Wifi Camera',
      shortDesc: 'Weatherproof housing for outdoor security.',
      description: 'Designed for outdoor durability, the Bullet Camera features weatherproof housing and infrared night vision. Ideal for entrances, driveways, and parking lots.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAifGLcidXgUOsaz01i1gXypjP_uw0e4BNugxy_R6B6BQIDAUTP1rrTqmRuzBzxQjS0NFcK9l6tmQNdAPOzpwllbROnBLELwzwPaBl7bN7nMaS5HPS8f5q8DpQEWRjfiYJWtol49rWb6bPrReznCx1Lf-6iVGx1FZA0msyp7LSaa4xYNmYXn0bz945UbBA_cHyaW9m0pzY2DoCpNaahawQclfmcDUcmL8lPy6gL4sBxWhRycooZNN4S7S9Getz3tukP-bUDFXz-_ks'
    },
    {
      id: 'p3',
      title: 'Dome Camera',
      shortDesc: 'Vandal-resistant ceiling mount cameras.',
      description: 'The Dome Camera is tamper-resistant and blends seamlessly into ceilings. It provides a wide viewing angle and is perfect for retail stores and offices.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC0AqF8_sRSsqXQwvCauvXYv7orFFo2Go5k_Ja8pydzywcF3lEMpHFf6RvVlizahKeFxgZWV1MxqcKnzXBRwpsKuV1NYisztH6uyBWNjrB1vbtup3-V1mXWxwrWF21dtloQTQYL5zXgNpsdliAqL-RSw-JwnykCgQPapEd3PtK-c2OCQCptmESXh0vBm5x5azYlFyoKuo_R-EAHTTjGZtjwca6HcdSZjEdaN-xAU7vB4q78_PQTlcngOrSKbPEhl-62Tv3GQV0HI4'
    },
    {
      id: 'p4',
      title: 'PTZ Security Camera',
      shortDesc: 'Pan, tilt, and zoom for wide area coverage.',
      description: 'Pan-Tilt-Zoom cameras allow operators to monitor large areas with a single unit. Ideal for large commercial spaces, industrial sites, and city surveillance.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyvjSDRr1o482IQ3BBTVY_a9fX2d6bFEL6efUpB-qxslyWbjfm4LWMy9hWeEVDuHY70RLmNsSp7l_7XikfgjYJm4qXSDVFVda0g5RFy0v1cKaZY5NMxtVILOSSE6yugNG8Fu0EufOcY_DpfX7Ug1qBqLjls_gKS1V0gg4xr92Kltcqt8Z8KQzeg8JKigxJL7sAr30b4s8ZyvKNuMZvaD9n2r_sHvRSA0yabDwsVfQt2JCze3KN-kUri8Va1vLMCRKf9ehyWvjCCLA'
    },
    {
      id: 'p5',
      title: 'Wireless Cameras',
      shortDesc: 'Easy installation with no signal cables.',
      description: 'Wire-free installation makes these cameras perfect for historical buildings or rented properties where drilling is not an option. Rechargeable battery powered.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD95NPStOC1NHkO4jzoZiCEGq2D_SF_Ccvv0x_tAPUlywxu8DZZlIHMROux6x9BIYCC2pjvBeYodNcYrvj9VkvBM84tP3p4cD2e0ITRw07FXrHjvzLOOeOx3vWQXq-QHDyXeYVB7U9OobHk2-f2dbAE47CHoMlIO_7udhUUy13ZIwwvTj7Zxw37I4-oO6mPnSxqC_A4ODJPbaL8OSs2S_nSaoJyah-HyUrw2pkSHsElmbDO_1WYgQ5o-YU1zr0dfmww6rEUOpJCgSI'
    },
    {
      id: 'p6',
      title: 'Solar Cameras',
      shortDesc: 'Self-powered for remote off-grid sites.',
      description: 'Equipped with solar panels, these cameras are perfect for construction sites, farms, or remote locations without access to power lines. 4G/5G connectivity enabled.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8lO04AdO1C5kpd1QyNOFegP1ZcK3slsme57Kvnu9RYCObApxj2zlEiuLVpMoha2aYJhAis2tvc44UmUgrzVFOyBJsPLLX-4cMDe-szU-dZaOKvxNrGpCKqHNaCpoBHLvE61E5d4OFxEw0EXuHsXKgm0Ye3Pu4fWTKRHKoopwOWPetAPXmzFrdmdWShMce61aAvN--0Cmg8Ma1nSn3uzUCemVLapkPrN0g5neY6M_jEaGwbDpnZ6I8oo3WDOvPNzGt6h7Xy6liMfU'
    }
  ];

  // Data for Services
  const services: ProductOrService[] = [
    {
      id: 's1',
      title: 'Camera Installation',
      shortDesc: 'Crystal-clear local recording for homes and businesses.',
      description: 'We specialize in the professional setup of high-definition analog and digital systems. Ensuring optimal angles and coverage for maximum security.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBWCIxZx_Yzeb1FXd2wzVU_llNnzJx72P35I5FdI8CCbGC4tyFUy7e-tkBytoguCJ3HR4dlu_iG6UJrOVF2Zne2xAFsX8f94aT9yj3jorwUKooaMTxMo78957b5zj_vUY96bcewpalPXNlXljltUTozIzsTMb49dY_GuQ5y1Yo0MFQY90L7T_ZzDgguiANq1mrH2TiBl7V8DrqKGnn_mJD3TLyH-hds3X7qQzNcS4v0pGLVHKYqWzxqO_IE0_16FyTAbW8B4Vgsf4'
    },
    {
      id: 's2',
      title: 'IP Camera Systems',
      shortDesc: 'Scalable network solutions for enterprise environments.',
      description: 'Scalable network video surveillance systems designed for enterprises. Features remote access, advanced analytics, and seamless integration with IT infrastructure.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzjfsPDgIUweaSEGauE6j9AQCuASCJV7GOQG8zVBK6qvcIRtrZBDf-QLHJ48serhOoLj2w1LU03vDg8U5qivuMd4kijnFrZEX0n-heMJi8iPXfJeIrZGWHIofzU-6-7jdM8bw2b-m66xV-dG0G0SbgSS2frUEm6OAC-XrFs_w5vrx7IkN5dddbDCZr41XnvE9RQMYzbnmvuJyl9tZII3G77ok5gSzCvk-usyw3jvB_kft4cP-4zwswq2VHJ3MsvXPXzlxCVujAMmY'
    },
    {
      id: 's3',
      title: 'System Maintenance',
      shortDesc: 'Regular health checks to ensure 24/7 reliability.',
      description: 'Comprehensive maintenance packages including lens cleaning, firmware updates, and system health diagnostics to ensure your surveillance system never fails.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmawEtkXufgsHLXt2c7skK467uOrlT4e82sqY9hyV3sMn_VF_pZBKQC6S4HwjXBUo8xho7pusp9roid3cNgBwuTzsmRFBcqfgz4AE8eJCx_vv5qVeV5fZS5-ObWXj_ZjLXj60EJjmKxtvGhxzVT3GUpqm4pWkmf6i6r3jAM9uzYz4SyekYYAXJUavsJFUFhB7FZHRmKYgdtIFArlPXiCDrr-mRX5SW25xggBvMBL3DcWe4Ek6DhWaCf681WfoE6VSqGbfwkOvH30U'
    },
  ];

  return (
    <div className="scroll-smooth bg-white text-slate-800 font-sans antialiased">
      
      {/* Global Modal Component */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 transition-opacity duration-300" onClick={closeModal}>
          <div 
            className="bg-white rounded-2xl max-w-lg w-full relative overflow-hidden shadow-2xl transform transition-all scale-95 hover:scale-100" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 text-slate-600 hover:text-slate-900 hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative h-56 w-full">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedItem.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed">{selectedItem.description}</p>
              
              <div className="mt-6 flex gap-4">
                <button 
                  onClick={() => {
                    closeModal();
                    // Optionally scroll to contact or open whatsapp
                    window.open(whatsappLink, '_blank');
                  }}
                  className="flex-1 bg-[#1c74e9] text-white py-3 rounded-lg font-semibold hover:bg-[#155bb5] transition-colors text-sm"
                >
                  Request Quote
                </button>
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 border border-slate-200 rounded-lg font-semibold text-slate-600 hover:bg-slate-50 transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={cctvLogo} alt="CCTV Logo" className="w-[140px]" />
          </div>

          <nav className="hidden lg:flex items-center space-x-8 font-medium text-slate-600">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#1c74e9] transition-colors cursor-pointer">Home</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-[#1c74e9] transition-colors cursor-pointer">Products</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#1c74e9] transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#1c74e9] transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#1c74e9] transition-colors cursor-pointer">Contact</button>
          </nav>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#1c74e9] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#155bb5] transition-all shadow-md">
            Get Quote
          </a>
        </div>
      </header>

      <main className="pt-16 md:pt-8">
        {/* Hero Section */}
        <section 
          id="home" 
          className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden flex items-center px-2 md:px-8"
        >
          {/* Background elements omitted for brevity, same as previous */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* LEFT: Text content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-2 bg-[#1c74e9]/10 text-[#1c74e9] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1c74e9] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1c74e9]"></span>
                  </span>
                  5+ YEARS OF TRUSTED EXPERTISE
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Secure Your Property with{' '}
                  <span className="text-[#1c74e9]">
                    Expert CCTV
                  </span>{' '}
                  Solutions
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Professional installation of high-quality security cameras for homes, shops, offices, factories & warehouses.
                  <span className="block mt-1 font-semibold text-[#1c74e9]">Trusted by 2,500+ satisfied clients across India.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1c74e9] text-white px-8 py-3 rounded-lg font-bold text-base text-center hover:bg-[#155bb5] hover:shadow-lg transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 group"
                  >
                    Get Free Quote
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  <a 
                    href="tel:+91954178179" 
                    className="bg-white text-slate-700 border border-slate-200 px-8 py-3 rounded-lg font-bold text-base text-center hover:border-[#1c74e9] hover:text-[#1c74e9] hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    Call Support
                  </a>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
                  <div className="flex -space-x-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">
                        ✓
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-full bg-[#1c74e9]/10 border-2 border-white flex items-center justify-center text-xs font-bold text-[#1c74e9]">
                      +2.5k
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">
                    <span className="font-bold text-slate-900">50+</span> happy clients
                  </div>
                  <div className="w-px h-5 bg-slate-200"></div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: Image block */}
              <div className="relative flex justify-center">
                <div className="absolute -top-10 -right-10 w-60 h-60 lg:w-80 lg:h-80 bg-[#1c74e9]/5 rounded-full blur-3xl"></div>
                
                <div className="absolute top-5 -left-4 z-20 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-2 animate-float hidden sm:flex">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700">24/7 Protection</p>
                      <p className="text-xs text-slate-500">Always active</p>
                    </div>
                  </div>
                </div>

                <div className="relative bg-white p-3 lg:p-4 rounded-2xl shadow-xl border border-slate-100 max-w-md mx-auto">
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      alt="Professional CCTV Camera Installation" 
                      className="rounded-lg w-full h-auto object-cover aspect-video"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU8ydNzVEni-vZsFvTK7oJUE_jgH4hYo-mcG1hBv8ZnCrmF6xTSSQam4Hu_n7L7ImmrL75WxTy-X4uOKbeYUG32MtzeeaXa3a9uVhWg3giEhURfL6T6R16ss9vie9oRyRJmYgIW2zKaChMVM5n3edWBFCzQ9BWGosTFxkh4cqqZQi6Tt6tVwkVan-1kSMnr91EqJdDMrlsbM5NF2qSzXhXJoJltQESgkM8JqjDPop5twtqL_ckKJnRjQ3zjdwC3aHFuBvwC2MGnm8"
                    />
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg shadow-md border border-slate-100 hidden sm:block">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-md flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Uptime</p>
                        <p className="text-sm font-extrabold text-[#1c74e9]">99.9%</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#1c74e9] to-[#3b82f6] text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-md">
                    Smart Protection
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg py-1.5 px-3 flex items-center gap-3 shadow-md border border-slate-100 whitespace-nowrap">
                  <p className="text-[10px] text-slate-500 font-medium">Trusted by:</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold text-slate-400">🏢 50+</span>
                    <span className="text-[10px] font-bold text-slate-400">🏭 10+</span>
                    <span className="text-[10px] font-bold text-slate-400">🏪 30+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 opacity-50">
            <svg className="w-full h-8 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
            </svg>
          </div>
        </section>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>

        {/* Products Section - Updated to use Map and onClick */}
        <section id="products" className="py-24 bg-white px-2 md:px-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Camera Range</h2>
              <p className="text-slate-600 text-lg">Choose from a wide variety of high-definition cameras tailored for specific environments and needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => openModal(product)}
                  className="p-8 bg-white border border-slate-100 rounded-lg text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
                >
                  <div className="overflow-hidden rounded-lg mb-6">
                    <img 
                      alt={product.title} 
                      className="mx-auto rounded-lg w-full max-w-[200px] group-hover:scale-105 transition-transform duration-300" 
                      src={product.image} 
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#1c74e9] transition-colors">{product.title}</h3>
                  <p className="text-slate-500 mt-2 text-sm">{product.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Updated to use Map and onClick */}
        <section id="services" className="py-24 bg-slate-50 px-2 md:px-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Professional Services</h2>
              <p className="text-slate-600 text-lg">From initial consultation to lifelong maintenance, we handle everything.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => openModal(service)}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={service.image} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#1c74e9] transition-colors">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white px-2 md:px-8">
          <div className="container mx-auto px-4 md:px-6">
            {/* ... Content unchanged ... */}
            <div className="flex flex-col items-center gap-12">
              <div className="w-full text-center max-w-4xl mb-8">
                <span className="text-[#1c74e9] font-bold uppercase tracking-widest text-sm">About Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">Surveillance Beyond Sight</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  At Sarvanetra, we believe that true security is proactive, not just reactive. Our name reflects our philosophy: the "All-Seeing Eye" that provides a layer of protection as vigilant as it is invisible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 w-full items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-[#1c74e9] pl-4">Who We Are</h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    Based in Hyderabad—one of the world’s most monitored and safest cities—we are a premier provider of integrated security and IT networking solutions. We specialize in the sales, installation, and maintenance of high-end surveillance systems for projects of all scales.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-[#1c74e9] pl-4 mt-8">Our Specialized Edge</h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    In an industry filled with generic options, Sarvanetra stands apart through a strict commitment to Indian Government Standards. We deal exclusively in STQC-approved products, ensuring that our clients receive hardware that meets the highest national benchmarks.
                  </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex gap-3 text-base">
                      <span className="text-[#1c74e9] font-bold">✔</span>
                      <div><strong className="text-slate-800">Skilled Expertise:</strong> Highly trained technicians for complex integration.</div>
                    </li>
                    <li className="flex gap-3 text-base">
                      <span className="text-[#1c74e9] font-bold">✔</span>
                      <div><strong className="text-slate-800">Scalable Solutions:</strong> Infrastructure for small shops to large communities.</div>
                    </li>
                    <li className="flex gap-3 text-base">
                      <span className="text-[#1c74e9] font-bold">✔</span>
                      <div><strong className="text-slate-800">Comprehensive AMC:</strong> Robust maintenance contracts for peace of mind.</div>
                    </li>
                    <li className="flex gap-3 text-base">
                      <span className="text-[#1c74e9] font-bold">✔</span>
                      <div><strong className="text-slate-800">National Focus:</strong> Prioritizing government-certified products.</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl mt-12">
                <div className="bg-gradient-to-br from-[#1c74e9] to-blue-700 p-8 rounded-2xl text-white shadow-lg">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">Our Vision</h4>
                  <p className="text-blue-100 leading-relaxed text-base">
                    "To bridge the global security gap by becoming India's most trusted integrator of certified surveillance and networking technologies."
                  </p>
                </div>
                <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-lg">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">Our Mission</h4>
                  <p className="text-slate-300 leading-relaxed text-base">
                    "To deliver uncompromising safety through STQC-approved security solutions and expert installation."
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
                  Whether you are looking to secure a residential complex or build a massive IT network, Sarvanetra provides the foresight you need.
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1c74e9] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#155bb5] transition-all shadow-md">
                  Let Us Help You See Beyond The Visible
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 Security Intelligence Hub - Fixed Width */}
        <section className="py-24 bg-slate-50 font-sans overflow-hidden px-2 md:px-8">
          {/* Changed to standard container */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 border-l-4 border-[#1c74e9] pl-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                2026 Security <span className="text-[#1c74e9]">Intelligence Hub</span>
              </h2>
              <p className="text-slate-600 text-lg max-w-3xl">
                From global benchmarks to regional leadership, explore the data driving the next generation of smart surveillance infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              
              <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-[#1c74e9]/50 transition-all group shadow-sm">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="bg-[#1c74e9]/10 text-[#1c74e9] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">National Market Leader</span>
                    <span className="text-slate-400 text-xs font-mono">EST. 2026</span>
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 mt-6 mb-2">Telangana: 64% Density</h3>
                  <p className="text-slate-600 max-w-md">The undisputed powerhouse of Indian surveillance. Driven by integrated "Safe City" projects.</p>
                </div>
                
                <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-slate-900 font-bold text-lg">#1</p>
                      <p className="text-slate-500 text-[10px] uppercase">Rank</p>
                    </div>
                    <div className="h-10 w-px bg-slate-200"></div>
                    <div className="text-center">
                      <p className="text-slate-900 font-bold text-lg">Hyderabad</p>
                      <p className="text-slate-500 text-[10px] uppercase">Primary Hub</p>
                    </div>
                  </div>
                  <div className="h-16 w-16 bg-[#1c74e9]/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1c74e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#1c74e9] rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </div>
                <h4 className="text-blue-200 font-medium uppercase tracking-widest text-xs mb-2">Global Standing</h4>
                <div className="text-8xl font-black mb-2">#3</div>
                <p className="text-xl font-bold">India</p>
                <p className="text-blue-100/70 text-xs mt-4 leading-relaxed px-4">
                  Surpassing the UK, Germany, and Singapore in urban surveillance density levels.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              <div className="space-y-4">
                <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2 uppercase text-sm tracking-widest text-slate-500">
                  Key Regional Insights
                </h4>
                
                <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center gap-6 hover:bg-slate-50 transition-colors group">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#1c74e9] font-bold text-xl group-hover:bg-[#1c74e9] group-hover:text-white transition-all">02</div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h5 className="text-slate-900 font-bold">Delhi</h5>
                      <span className="text-[10px] bg-blue-100 text-[#1c74e9] px-2 py-0.5 rounded uppercase font-bold">Urban Peak</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1">Extreme density in urban corridors. A global model for localized metropolitan surveillance.</p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center gap-6 hover:bg-slate-50 transition-colors group">
                  <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl group-hover:bg-purple-600 group-hover:text-white transition-all">03</div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h5 className="text-slate-900 font-bold">Maharashtra</h5>
                      <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded uppercase font-bold">Total Volume</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1">The commercial backbone. Leading in total hardware volume across Mumbai and Pune.</p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center">
                         <span className="text-slate-400 text-[10px] font-bold">INTL</span>
                      </div>
                      <div>
                        <p className="text-slate-900 text-sm font-bold">China (Global Benchmark)</p>
                        <p className="text-slate-400 text-[10px]">494 Cameras per 1k people</p>
                      </div>
                   </div>
                   <div className="text-[#1c74e9] font-black text-sm">TOP RANK</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 relative">
                <h4 className="text-slate-900 font-bold mb-8 flex items-center justify-between">
                  <span>Regional Growth Radar</span>
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded">2026 PROJECTIONS</span>
                </h4>
                
                <div className="grid grid-cols-1 gap-5">
                  <div className="flex items-center justify-between group cursor-default">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#1c74e9] group-hover:scale-150 transition-transform"></div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">Karnataka</p>
                        <p className="text-[10px] text-slate-400">Lead City: Bangalore</p>
                      </div>
                    </div>
                    <p className="text-[11px] font-bold text-[#1c74e9] bg-[#1c74e9]/5 px-2 py-1 rounded">Rapidly Growing</p>
                  </div>

                  <div className="flex items-center justify-between group cursor-default">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#1c74e9] transition-colors"></div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">Tamil Nadu</p>
                        <p className="text-[10px] text-slate-400">Lead City: Chennai</p>
                      </div>
                    </div>
                    <p className="text-[11px] font-bold text-slate-400">Industrial Leader</p>
                  </div>

                  <div className="flex items-center justify-between group cursor-default">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#1c74e9] transition-colors"></div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">Gujarat</p>
                        <p className="text-[10px] text-slate-400">Lead City: Ahmedabad</p>
                      </div>
                    </div>
                    <p className="text-[11px] font-bold text-slate-400">Public Safety</p>
                  </div>

                  <div className="flex items-center justify-between group cursor-default border-b border-slate-50 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#1c74e9] transition-colors"></div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">West Bengal</p>
                        <p className="text-[10px] text-slate-400">Lead City: Kolkata</p>
                      </div>
                    </div>
                    <p className="text-[11px] font-bold text-slate-400">Transport Hubs</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Forecast Summary</p>
                    <p className="text-[10px] text-slate-600 font-medium italic text-right max-w-[180px]">
                      "These top 10 regions will account for 85% of market share."
                    </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Government Mandates Section - Fixed Width */}
        <section id="mandates" className="py-24 bg-white px-2 md:px-8">
          <div className="container mx-auto px-4 md:px-6">
            {/* Content unchanged, just confirming container class */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">2026 Security Mandates</h2>
              <p className="text-slate-600 text-lg">
                Effective April 1, 2026, the Government of India has implemented strict new security mandates for all internet-connected CCTV cameras.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mx-auto">
              {/* STQC */}
              <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-[#1c74e9]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#1c74e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">STQC</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Standardisation Testing & Quality Certification</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A specialized security "health check" by MeitY ensuring firmware is tamper-proof and encrypted.
                </p>
              </div>

              {/* BIS */}
              <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-[#1c74e9]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#1c74e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">BIS</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Bureau of Indian Standards</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Guarantees physical safety. Devices are built to last in Indian environmental conditions.
                </p>
              </div>

              {/* CTC */}
              <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-[#1c74e9]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#1c74e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">CTC</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Cyber Trust Certification</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ensures end-to-end encryption. Your footage remains private even if intercepted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-50 px-0 md:px-8">
          <div className="container mx-auto px-4 md:px-6">
            {/* Content unchanged */}
            <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="p-12 lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to secure your property?</h2>
                <p className="text-slate-400 mb-10 text-lg">Get a free site survey and a no-obligation quote from our security experts today.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1c74e9]/20 rounded-full flex items-center justify-center text-[#1c74e9]">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Call Direct</p>
                      <p className="text-white font-bold text-lg">+91 9063835719 | +91 9063835720</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1c74e9]/20 rounded-full flex items-center justify-center text-[#1c74e9]">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email Us</p>
                      <p className="text-white font-bold text-lg">sarvanetracctv@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1c74e9]/20 rounded-full flex items-center justify-center text-[#1c74e9]">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Main Office</p>
                      <p className="text-white font-bold text-base">12-2-124/1, Ambedkar Nagar, BALAJI NAGAR, Moosapet, Hyderabad, Telangana 500018</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-12 lg:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#1c74e9] focus:border-[#1c74e9] px-4 py-3 outline-none text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#1c74e9] focus:border-[#1c74e9] px-4 py-3 outline-none text-base"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#1c74e9] focus:border-[#1c74e9] px-4 py-3 outline-none text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Requirements</label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#1c74e9] focus:border-[#1c74e9] px-4 py-3 outline-none text-base"
                      placeholder="Briefly describe your security needs..."
                      rows={4}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1c74e9] text-white font-bold py-4 rounded-lg hover:bg-[#155bb5] transition-all shadow-lg text-base"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Map */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left Side: Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <Image src={cctvLogo} alt="CCTV Logo" className="w-[140px]" />
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 text-base">
                Leading provider of security technology and professional installation services. Committed to protecting what matters most to you since 2012.
              </p>
              <div className="flex gap-6 text-slate-400 text-sm mb-6">
                <a href="#" className="hover:text-[#1c74e9] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#1c74e9] transition-colors">Terms of Service</a>
              </div>
              <div className="flex gap-4">
                 <a href={whatsappLink} target="_blank" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1c74e9] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                 </a>
                 <a href="tel:+919063835719" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1c74e9] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 </a>
              </div>
            </div>

            {/* Right Side: Map */}
            <div className="h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4886487696896!2d78.42345681487653!3d17.49123456789123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzQ4LjQiTiA3OMKwMjUnMzEuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin&q=12-2-124%2F1%2C+Ambedkar+Nagar%2C+BALAJI+NAGAR%2C+Moosapet%2C+Hyderabad%2C+Telangana+500018"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© 2026 Sarvanetra Technologies. All rights reserved.</p>
            <p className="text-slate-500 text-xs">Made with dedication for a safer India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}