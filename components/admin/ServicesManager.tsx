'use client';

import { useEffect, useState } from 'react';
import { Trash2, Plus, Edit2 } from 'lucide-react';
import ServiceForm from './ServiceForm';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  duration: string;
  features: string;
}

export default function ServicesManager() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

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

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const response = await fetch(`/api/services/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (response.ok) {
        setServices(services.filter((s) => s.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
  };

  const handleFormSubmit = async (formData: Omit<Service, 'id'>) => {
    try {
      const endpoint = editingService
        ? `/api/services/${editingService.id}`
        : '/api/services';
      const method = editingService ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (response.ok) {
        const result = await response.json();
        if (editingService) {
          setServices(services.map((s) => (s.id === result.id ? result : s)));
        } else {
          setServices([result, ...services]);
        }
        setShowForm(false);
        setEditingService(null);
      }
    } catch (error) {
      console.error('Failed to save service:', error);
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
      {!showForm && !editingService && (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors mb-8"
        >
          <Plus className="w-5 h-5" />
          Add New Service
        </button>
      )}

      {(showForm || editingService) && (
        <ServiceForm
          service={editingService || undefined}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingService(null);
          }}
        />
      )}

      {!showForm && !editingService && services.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative bg-slate-100 h-48 overflow-hidden">
                {service.image_url && (
                  <img
                    src={service.image_url}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6 text-sm">
                  <div>
                    <span className="text-slate-600">Duration: </span>
                    <span className="font-semibold text-slate-900">
                      {service.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-600">Price: </span>
                    <span className="font-semibold text-brand">
                      ₹{service.price.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-600">Features: </span>
                    <span className="text-slate-700">{service.features}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setEditingService(service)}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-100 text-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-200 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
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

      {!showForm && !editingService && services.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 mb-4">No services yet</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
          >
            Create First Service
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
