'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  specs: string;
}

export default function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Mock products if none exist in DB
  const displayProducts = products.length > 0 ? products : [
    {
      id: 1,
      name: 'Mini Wifi Camera',
      description: 'Compact design for discreet monitoring.',
      price: 2999,
      image_url: 'https://images.unsplash.com/photo-1611532736580-37541b0f2e4a?w=500&q=80',
      category: 'Wifi',
      specs: 'HD Resolution, Night Vision'
    },
    {
      id: 2,
      name: 'Bullet Wifi Camera',
      description: 'Weatherproof housing for outdoor security.',
      price: 4999,
      image_url: 'https://images.unsplash.com/photo-1614008375890-cb53b6c5f8d5?w=500&q=80',
      category: 'Outdoor',
      specs: '4K Resolution, IP67 Rated'
    },
    {
      id: 3,
      name: 'Dome Camera',
      description: 'Vandal-resistant ceiling mount cameras.',
      price: 3999,
      image_url: 'https://images.unsplash.com/photo-1573265409116-07d62f46f71c?w=500&q=80',
      category: 'Indoor',
      specs: 'Vandal Proof, 360° Coverage'
    },
    {
      id: 4,
      name: 'PTZ Security Camera',
      description: 'Pan, tilt, and zoom for wide area coverage.',
      price: 7999,
      image_url: 'https://images.unsplash.com/photo-1614008375890-cb53b6c5f8d5?w=500&q=80',
      category: 'Premium',
      specs: '30x Zoom, Auto Tracking'
    },
  ];

  return (
    <section className="py-24 bg-white" data-purpose="products-grid" id="products">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Camera Range</h2>
          <p className="text-slate-600">Choose from a wide variety of high-definition cameras tailored for specific environments and needs.</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-lift"
              >
                <div className="relative overflow-hidden bg-slate-100 h-48">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ₹{product.price.toLocaleString()}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{product.description}</p>
                  <p className="text-xs text-slate-500 mb-4">{product.specs}</p>
                  <button className="w-full bg-brand text-white py-2 rounded-lg font-semibold hover:bg-brand-dark transition-colors">
                    Learn More
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
