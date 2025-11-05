import { useState, useEffect } from 'react';
import { MapPin, Loader } from 'lucide-react';

export default function LocationPicker() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({
    state: 'Karnataka',
    city: 'Bangalore',
    area: 'Indiranagar',
    landmark: 'Near 100 Feet Road',
    lat: 12.9716,
    lng: 77.5946
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleMapClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLocation({
        state: 'Karnataka',
        city: 'Bangalore',
        area: 'Koramangala',
        landmark: 'Near 5th Block',
        lat: 12.9352,
        lng: 77.6245
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Select Your Location
          </h2>
          <p className="text-lg text-gray-600">
            We'll pick up and deliver right to your doorstep
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative aspect-video bg-gray-200">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Loader className="h-8 w-8 text-teal-600 animate-spin mx-auto mb-2" />
                    <p className="text-gray-600">Please wait...</p>
                  </div>
                </div>
              ) : (
                <div
                  onClick={handleMapClick}
                  className="absolute inset-0 cursor-pointer group"
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=800')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-teal-600 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="h-12 w-12 text-red-600 drop-shadow-lg animate-bounce" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-lg">
                    <p className="text-sm text-gray-600">
                      Click anywhere to update location
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Location Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  value={location.state}
                  onChange={e =>
                    setLocation({ ...location, state: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={location.city}
                  onChange={e =>
                    setLocation({ ...location, city: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area
                </label>
                <input
                  type="text"
                  value={location.area}
                  onChange={e =>
                    setLocation({ ...location, area: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Landmark
                </label>
                <input
                  type="text"
                  value={location.landmark}
                  onChange={e =>
                    setLocation({ ...location, landmark: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="pt-2">
                <button className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors">
                  Save Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
