import { MapPin, X } from 'lucide-react';
import { Store } from '../../types';

interface StoreMapProps {
  stores: Store[];
  selectedStore: Store | null;
  onSelectStore: (store: Store | null) => void;
}

export default function StoreMap({
  stores,
  selectedStore,
  onSelectStore
}: StoreMapProps) {
  return (
    <div className="relative bg-[#162B47] rounded-xl overflow-hidden shadow-lg border border-[#D1B46A]/20">
      <div
        className="aspect-[16/10] relative"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#0D223A] opacity-40"></div>

        {stores.map(store => (
          <button
            key={store.id}
            onClick={() => onSelectStore(store)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
            style={{
              left: `${((store.lng - 77.5) / 0.2) * 100}%`,
              top: `${((13.0 - store.lat) / 0.2) * 100}%`
            }}
          >
            <MapPin
              className={`h-10 w-10 ${
                selectedStore?.id === store.id
                  ? 'text-[#E3C87D] animate-bounce'
                  : 'text-[#D1B46A]'
              } drop-shadow-lg`}
            />
          </button>
        ))}

        {selectedStore && (
          <div className="absolute bottom-4 left-4 right-4 bg-[#162B47] rounded-lg shadow-xl p-4 max-w-sm border border-[#D1B46A]/20">
            <button
              onClick={() => onSelectStore(null)}
              className="absolute top-2 right-2 text-[#A8B3C5] hover:text-[#D1B46A]"
            >
              <X className="h-5 w-5" />
            </button>
            <h4 className="font-semibold text-[#D1B46A] mb-2 pr-6">
              {selectedStore.name}
            </h4>
            <p className="text-sm text-[#A8B3C5] mb-2">
              {selectedStore.address}
            </p>
            <p className="text-xs text-[#A8B3C5]">{selectedStore.hours}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${selectedStore.lat},${selectedStore.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-[#D1B46A] font-medium hover:text-[#E3C87D]"
            >
              Get Directions →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
