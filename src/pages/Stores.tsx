import { useState, useMemo } from 'react';
import StoreSearch from '../components/stores/StoreSearch';
import StoreCard from '../components/stores/StoreCard';
import StoreMap from '../components/stores/StoreMap';
import { stores } from '../data/mockData';
import { Store } from '../types';

export default function Stores() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const cities = useMemo(() => {
    return Array.from(new Set(stores.map(store => store.city)));
  }, []);

  const filteredStores = useMemo(() => {
    return stores.filter(store => {
      const matchesSearch =
        searchTerm === '' ||
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCity = selectedCity === '' || store.city === selectedCity;

      return matchesSearch && matchesCity;
    });
  }, [searchTerm, selectedCity]);

  return (
    <div className="min-h-screen bg-[#0D223A]">
      <div className="bg-[#162B47] border-b border-[#D1B46A]/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#D1B46A] mb-4">Our Stores</h1>
            <p className="text-lg text-[#A8B3C5] max-w-2xl mx-auto">
              Find the nearest Laundry Book location near you
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#D1B46A]">
              All Stores ({filteredStores.length})
            </h2>
          </div>

          {filteredStores.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredStores.map(store => (
                <StoreCard
                  key={store.id}
                  store={store}
                  onSelectStore={setSelectedStore}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#A8B3C5]">
                No stores found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
