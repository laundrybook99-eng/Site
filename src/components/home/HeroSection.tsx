import { Calendar, Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0D223A] to-[#162B47] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D1B46A] leading-tight mb-6">
              Experience the Ultimate{' '}
              <span className="text-[#E3C87D] bg-gradient-to-r from-[#D1B46A] to-[#E3C87D] bg-clip-text text-transparent">Laundry Care</span> with Us
            </h1>
            <p className="text-lg sm:text-xl text-[#A8B3C5] mb-8 max-w-2xl mx-auto lg:mx-0">
              Premium laundry services delivered to your doorstep. Quality, convenience, and care for every garment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => {
                  const bookingWidget = document.getElementById('booking-widget');
                  if (bookingWidget) {
                    bookingWidget.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D1B46A] text-[#0D223A] rounded-lg font-semibold hover:bg-[#E3C87D] transition-colors shadow-lg hover:shadow-xl"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Pickup
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto">
              <img
                src="/w.jpg"
                alt="Laundry Services"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#162B47] p-6 rounded-xl shadow-xl max-w-xs hidden lg:block border border-[#D1B46A]/20">
              <div className="flex items-center">
                <div className="bg-[#0D223A] p-3 rounded-lg border border-[#D1B46A]/30">
                  <Calendar className="h-6 w-6 text-[#D1B46A]" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-[#A8B3C5]">Quick Service</p>
                  <p className="font-semibold text-[#D1B46A]">24-48 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
