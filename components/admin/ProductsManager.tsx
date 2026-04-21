'use client';

import { useEffect, useState } from 'react';
import { Trash2, Plus, Edit2 } from 'lucide-react';
import ProductForm from './ProductForm';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  specs: string;
}

export default function ProductsManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

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

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (response.ok) {
        setProducts(products.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  const handleFormSubmit = async (formData: Omit<Product, 'id'>) => {
    try {
      const endpoint = editingProduct
        ? `/api/products/${editingProduct.id}`
        : '/api/products';
      const method = editingProduct ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (response.ok) {
        const result = await response.json();
        if (editingProduct) {
          setProducts(products.map((p) => (p.id === result.id ? result : p)));
        } else {
          setProducts([result, ...products]);
        }
        setShowForm(false);
        setEditingProduct(null);
      }
    } catch (error) {
      console.error('Failed to save product:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Add Button */}
      {!showForm && !editingProduct && (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors mb-8"
        >
          <Plus className="w-5 h-5" />
          Add New Product
        </button>
      )}

      {/* Form */}
      {(showForm || editingProduct) && (
        <ProductForm
          product={editingProduct || undefined}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      )}

      {/* Products Grid */}
      {!showForm && !editingProduct && products.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative bg-slate-100 h-48 overflow-hidden">
                {product.image_url && (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6 text-sm">
                  <div>
                    <span className="text-slate-600">Category: </span>
                    <span className="font-semibold text-slate-900">
                      {product.category}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-600">Price: </span>
                    <span className="font-semibold text-brand">
                      ₹{product.price.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-600">Specs: </span>
                    <span className="text-slate-700">{product.specs}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setEditingProduct(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-100 text-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-200 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-100 text-red-700 py-2 rounded-lg font-semibold hover:bg-red-200 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!showForm && !editingProduct && products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 mb-4">No products yet</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
          >
            Create First Product
          </button>
        </div>
      )}

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
      `}</style>
    </div>
  );
}
