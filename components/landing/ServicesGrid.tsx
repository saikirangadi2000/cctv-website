'use client';

import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  duration: string;
  features: string;
}

export default function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Mock services if none exist in DB
  const displayServices = services.length > 0 ? services : [
    {
      id: 1,
      name: 'HD Camera Installation',
      description: 'Crystal-clear local recording for homes and businesses with high-resolution analog systems.',
      price: 5000,
      image_url: 'https://images.unsplash.com/photo-1559163615-cd4628902d4a?w=500&q=80',
      duration: '1-2 days',
      features: 'Professional installation, Warranty, Support'
    },
    {
      id: 2,
      name: 'IP Camera Systems',
      description: 'Scalable network solutions for enterprise and campus environments with remote access.',
      price: 15000,
      image_url: 'https://images.unsplash.com/photo-1518535143038-b418e6d4b155?w=500&q=80',
      duration: '2-5 days',
      features: 'Remote monitoring, Cloud storage, Mobile app'
    },
    {
      id: 3,
      name: 'System Maintenance',
      description: 'Regular health checks, lens cleaning, and firmware updates to ensure 24/7 reliability.',
      price: 2000,
      image_url: 'https://images.unsplash.com/photo-1573265409116-07d62f46f71c?w=500&q=80',
      duration: 'Monthly',
      features: 'Regular checkups, Cleaning, Updates'
    },
    {
      id: 4,
      name: 'Solar Surveillance',
      description: 'Off-grid surveillance for farms, construction sites, and remote open areas.',
      price: 20000,
      image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80',
      duration: '3-7 days',
      features: 'Solar powered, Battery backup, 24/7 monitoring'
    },
  ];

  return (
    <section className="py-24 bg-slate-50" data-purpose="services-section" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Professional Services</h2>
          <p className="text-slate-600">Complete surveillance solutions tailored to your specific needs and budget.</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-lift border border-slate-200"
              >
                <div className="relative overflow-hidden bg-slate-100 h-56">
                  <img
                    src={service.image_url}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand" />
                      <span className="text-slate-700">Duration: {service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand" />
                      <span className="text-slate-700">₹{service.price.toLocaleString()} onwards</span>
                    </div>
                  </div>

                  <button className="w-full bg-brand text-white py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors">
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .brand {
          color: #1c74e9;
        }
        .bg-brand {
          background-color: #1c74e9;
        }
        .bg-brand-dark {
          background-color: #155bb5;
        }
        .hover-lift {
          transition: transform 0.2s ease-out;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
}
