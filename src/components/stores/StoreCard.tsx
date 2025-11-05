import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { Store } from '../../types';

interface StoreCardProps {
  store: Store;
  onSelectStore: (store: Store) => void;
}

export default function StoreCard({ store, onSelectStore }: StoreCardProps) {
  const getDirectionsUrl = (store: Store) => {
    return `https://www.google.com/maps/search/?api=1&query=${store.lat},${store.lng}`;
  };

  return (
    <div className="bg-[#162B47] rounded-xl shadow-md hover:shadow-lg transition-all p-6 cursor-pointer border border-[#D1B46A]/20 hover:shadow-[#D1B46A]/10" onClick={() => onSelectStore(store)}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-[#D1B46A] mb-2">
            {store.name}
          </h3>
          <div className="flex items-start text-[#A8B3C5] mb-2">
            <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-[#D1B46A]" />
            <p className="text-sm">
              {store.address}, {store.city}, {store.state}
            </p>
          </div>
          <div className="flex items-center text-[#A8B3C5]">
            <Clock className="h-5 w-5 mr-2 flex-shrink-0 text-[#D1B46A]" />
            <p className="text-sm">{store.hours}</p>
          </div>
        </div>
        {store.distance && (
          <div className="bg-[#0D223A] text-[#E3C87D] px-3 py-1 rounded-full text-sm font-medium border border-[#D1B46A]/20">
            {store.distance}
          </div>
        )}
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-[#D1B46A] mb-2">Services:</p>
        <div className="flex flex-wrap gap-2">
          {store.services.map((service, index) => (
            <span
              key={index}
              className="bg-[#0D223A] text-[#A8B3C5] px-3 py-1 rounded-full text-xs border border-[#D1B46A]/20"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <a
        href={getDirectionsUrl(store)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#D1B46A] text-[#0D223A] rounded-lg font-medium hover:bg-[#E3C87D] transition-colors"
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Get Directions
      </a>
    </div>
  );
}
