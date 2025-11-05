import { Search } from 'lucide-react';

interface StoreSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCity: string;
  onCityChange: (value: string) => void;
  cities: string[];
}

export default function StoreSearch({
  searchTerm,
  onSearchChange,
  selectedCity,
  onCityChange,
  cities
}: StoreSearchProps) {
  return (
    <div className="bg-[#162B47] rounded-xl shadow-lg p-6 mb-8 border border-[#D1B46A]/20">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#D1B46A]" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Search by store name or address..."
            className="w-full pl-12 pr-4 py-3 bg-[#0D223A] border border-[#D1B46A]/20 rounded-lg focus:ring-2 focus:ring-[#D1B46A] focus:border-transparent text-[#A8B3C5] placeholder-[#A8B3C5]/60"
          />
        </div>
        <select
          value={selectedCity}
          onChange={e => onCityChange(e.target.value)}
          className="px-4 py-3 bg-[#0D223A] border border-[#D1B46A]/20 rounded-lg focus:ring-2 focus:ring-[#D1B46A] focus:border-transparent text-[#A8B3C5]"
        >
          <option value="">All Cities</option>
          {cities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
