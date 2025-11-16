import { useState } from 'react';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { services, stores, timeSlots, dryWashItems } from '../../data/mockData';

export default function BookingWidget() {
  const [pickupDay, setPickupDay] = useState<'today' | 'tomorrow'>('today');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: number }>({});
  const [selectedDryWashItems, setSelectedDryWashItems] = useState<{ [key: string]: number }>({});
  const [unit, setUnit] = useState<'piece' | 'kg'>('kg');
  const [selectedStore, setSelectedStore] = useState('');
  const [isDryWashOpen, setIsDryWashOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');

  const updateServiceQuantity = (serviceId: string, delta: number) => {
    setSelectedServices(prev => {
      const current = prev[serviceId] || 0;
      const newValue = Math.max(0, current + delta);
      if (newValue === 0) {
        const { [serviceId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [serviceId]: newValue };
    });
  };

  const updateDryWashQuantity = (itemId: string, delta: number) => {
    setSelectedDryWashItems(prev => {
      const current = prev[itemId] || 0;
      const newValue = Math.max(0, current + delta);
      if (newValue === 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newValue };
    });
  };

  const calculateTotal = () => {
    let total = 0;
    Object.entries(selectedServices).forEach(([serviceId, quantity]) => {
      const service = services.find(s => s.id === serviceId);
      if (service) total += service.pricePerUnit * quantity;
    });
    Object.entries(selectedDryWashItems).forEach(([itemId, quantity]) => {
      const item = dryWashItems.find(i => i.id === itemId);
      if (item) total += item.price * quantity;
    });
    return total;
  };

  const validatePhoneNumber = (number: string) => {
    const cleaned = number.replace(/\D/g, '');
    if (cleaned.length <= 10) setPhoneNumber(cleaned);
  };

  const canSchedule =
    selectedStore !== '' &&
    selectedTimeSlot !== '' &&
    phoneNumber.length === 10 &&
    name.trim() !== '';

  const handleSchedule = () => {
    if (!canSchedule) return;

    const waPhone = '919908689969';

    const selectedServicesList = Object.entries(selectedServices).map(([id, qty]) => {
      const s = services.find(x => x.id === id);
      return s ? `${s.name} x${qty} (${s.unit})` : `${id} x${qty}`;
    });

    const selectedDryList = Object.entries(selectedDryWashItems).map(([id, qty]) => {
      const i = dryWashItems.find(x => x.id === id);
      return i ? `${i.name} x${qty}` : `${id} x${qty}`;
    });

    const storeName = stores.find(s => s.id === selectedStore)?.name || 'N/A';
    const total = calculateTotal();

    const message = `Hello, I'd like to schedule a pickup.\n\nName: ${name}\nPhone: ${phoneNumber}\nPickup Day: ${pickupDay}\nTime Slot: ${selectedTimeSlot}\nStore: ${storeName}\nPickup Location: ${address}\n\nServices:\n${[...selectedServicesList, ...selectedDryList].join('\n') || 'None'}\n\nTotal: ₹${total}`;

    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="booking-widget" className="py-16 bg-[#0D223A] text-[#D1B46A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Book Your Service
          </h2>
          <p className="text-lg text-[#A8B3C5]">
            Schedule a pickup in just a few clicks
          </p>
        </div>

        <div className="bg-[#162B47] rounded-2xl shadow-xl border border-[#D1B46A]/30 p-6 sm:p-8">
          {/* Pickup Day */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">
              Pickup Day
            </label>
            <div className="flex gap-4">
              {['today', 'tomorrow'].map(day => (
                <button
                  key={day}
                  onClick={() => setPickupDay(day as 'today' | 'tomorrow')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                    pickupDay === day
                      ? 'bg-[#D1B46A] text-[#0D223A]'
                      : 'bg-[#0D223A] text-[#A8B3C5] border border-[#D1B46A]/30 hover:bg-[#0D223A]/70'
                  }`}
                >
                  {day === 'today' ? 'Today' : 'Tomorrow'}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Time Slot</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  onClick={() => setSelectedTimeSlot(slot)}
                  className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    selectedTimeSlot === slot
                      ? 'bg-[#D1B46A] text-[#0D223A]'
                      : 'bg-[#0D223A] text-[#A8B3C5] border border-[#D1B46A]/30 hover:bg-[#0D223A]/70'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Services</label>
            <div className="flex gap-4 mb-4">
              {['kg', 'piece'].map(u => (
                <button
                  key={u}
                  onClick={() => setUnit(u as 'kg' | 'piece')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    unit === u
                      ? 'bg-[#D1B46A] text-[#0D223A]'
                      : 'bg-[#0D223A] text-[#A8B3C5] border border-[#D1B46A]/30 hover:bg-[#0D223A]/70'
                  }`}
                >
                  Per {u === 'kg' ? 'Kg' : 'Piece'}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {services
                .filter(s => s.unit === unit)
                .map(service => (
                  <div
                    key={service.id}
                    className="flex items-center justify-between p-4 bg-[#0D223A]/40 rounded-lg border border-[#D1B46A]/20"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{service.name}</p>
                      <p className="text-sm text-[#A8B3C5]">
                        ₹{service.pricePerUnit}/{service.unit}
                      </p>
                    </div>

                    {service.id === '4' ? (
                      <button
                        onClick={() => setIsDryWashOpen(!isDryWashOpen)}
                        className="flex items-center text-[#D1B46A] hover:text-white gap-1 px-3 py-1 border border-[#D1B46A]/50 rounded-lg"
                      >
                        <span className="text-sm">Select Items</span>
                        {isDryWashOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>
                    ) : (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateServiceQuantity(service.id, -1)}
                          className="w-8 h-8 flex items-center justify-center bg-[#0D223A] border border-[#D1B46A]/30 rounded-lg hover:bg-[#162B47]"
                        >
                          <Minus className="h-4 w-4 text-[#D1B46A]" />
                        </button>
                        <span className="w-8 text-center font-medium text-[#D1B46A]">
                          {selectedServices[service.id] || 0}
                        </span>
                        <button
                          onClick={() => updateServiceQuantity(service.id, 1)}
                          className="w-8 h-8 flex items-center justify-center bg-[#D1B46A] text-[#0D223A] rounded-lg hover:bg-[#E3C87D]"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}

              {/* Dry Wash Items */}
              {unit === 'piece' && isDryWashOpen && (
                <div className="mt-3 p-4 bg-[#0D223A]/40 rounded-lg border border-[#D1B46A]/20">
                  <h4 className="font-medium mb-3">Dry Wash Items</h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {dryWashItems.map(item => (
                      <div key={item.id} className="flex items-center justify-between py-2">
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-sm text-[#A8B3C5]">₹{item.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateDryWashQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center bg-[#0D223A] border border-[#D1B46A]/30 rounded hover:bg-[#162B47]"
                          >
                            <Minus className="h-3 w-3 text-[#D1B46A]" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium text-[#D1B46A]">
                            {selectedDryWashItems[item.id] || 0}
                          </span>
                          <button
                            onClick={() => updateDryWashQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center bg-[#D1B46A] text-[#0D223A] rounded hover:bg-[#E3C87D]"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Total */}
          <div className="mb-6 p-4 bg-[#0D223A]/50 rounded-lg border border-[#D1B46A]/30">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total Amount</span>
              <span className="text-xl font-bold">₹{calculateTotal()}</span>
            </div>
          </div>

          {/* Store Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Select Store</label>
            <select
              value={selectedStore}
              onChange={e => setSelectedStore(e.target.value)}
              className="w-full px-4 py-3 border border-[#D1B46A]/30 rounded-lg focus:ring-2 focus:ring-[#D1B46A] bg-[#0D223A] text-[#D1B46A]"
            >
              <option value="">Choose a store...</option>
              {stores.map(store => (
                <option key={store.id} value={store.id} className="bg-[#0D223A]">
                  {store.name} - {store.address}
                </option>
              ))}
            </select>
          </div>

          {/* Selected Store Display */}
          <div className="mb-6 p-4 bg-[#0D223A]/50 rounded-lg border border-[#D1B46A]/30">
            <p className="text-sm font-semibold mb-1">Selected Store Location</p>
            <p className="text-sm text-[#A8B3C5]">
              {selectedStore
                ? stores.find(s => s.id === selectedStore)?.address
                : 'No store selected'}
            </p>
          </div>

          
          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-[#D1B46A]/30 rounded-lg bg-[#0D223A] text-[#D1B46A] placeholder-[#A8B3C5] focus:ring-2 focus:ring-[#D1B46A]"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={e => validatePhoneNumber(e.target.value)}
              placeholder="Enter your 10-digit phone number"
              maxLength={10}
              className="w-full px-4 py-3 border border-[#D1B46A]/30 rounded-lg bg-[#0D223A] text-[#D1B46A] placeholder-[#A8B3C5] focus:ring-2 focus:ring-[#D1B46A]"
            />
            {phoneNumber && phoneNumber.length !== 10 && (
              <p className="mt-2 text-sm text-red-500">
                Please enter a valid 10-digit phone number
              </p>
            )}
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Pickup Location</label>
            <input
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder="Address(optional)"
              className="w-full px-4 py-3 border border-[#D1B46A]/30 rounded-lg bg-[#0D223A] text-[#D1B46A] placeholder-[#A8B3C5] focus:ring-2 focus:ring-[#D1B46A]"
            />
          </div>


          {/* Schedule Button */}
          <button
            onClick={handleSchedule}
            disabled={!canSchedule}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
              canSchedule
                ? 'bg-[#D1B46A] text-[#0D223A] hover:bg-[#E3C87D]'
                : 'bg-[#0D223A] text-[#A8B3C5] border border-[#D1B46A]/30 cursor-not-allowed'
            }`}
          >
            Schedule Pickup
          </button>
        </div>
      </div>
    </section>
  );
}
