import { services } from '../../data/mockData';

const imageMap: { [key: string]: string } = {
  package: '/wf.jpg',
  flame: '/si.jpg',
  sparkles: '/wi.jpg',
  droplet: '/dw.jpg'
};

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-[#162B47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D1B46A] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#A8B3C5] max-w-2xl mx-auto">
            Choose from our range of professional laundry services tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
              <div
                key={service.id}
                className="bg-[#0D223A] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-[#D1B46A]/20"
              >
                <div className="aspect-video bg-gradient-to-br from-[#D1B46A]/10 to-[#E3C87D]/10 flex items-center justify-center group-hover:from-[#D1B46A]/20 group-hover:to-[#E3C87D]/20 transition-colors">
                  <img 
                    src={imageMap[service.icon]} 
                    alt={service.name}
                    className="h-72 w-72 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#D1B46A] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-[#A8B3C5] text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-[#E3C87D]">
                      ₹{service.pricePerUnit}
                    </span>
                    <span className="text-[#A8B3C5] ml-1">/{service.unit}</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
