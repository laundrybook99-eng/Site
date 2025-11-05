import { Calendar, Sparkles, Truck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: 'Schedule',
      description: 'Choose your pickup time and location'
    },
    {
      icon: Sparkles,
      title: 'Clean',
      description: 'We clean your clothes with premium care'
    },
    {
      icon: Truck,
      title: 'Deliver',
      description: 'Fresh laundry delivered to your door'
    }
  ];

  return (
    <section className="py-16 bg-[#0D223A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D1B46A] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#A8B3C5] mb-8">
            Simple steps to fresh, clean laundry
          </p>
          <div className="mb-12">
            <img 
              src="/hiw.jpg" 
              alt="How It Works Process"
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#D1B46A] to-[#E3C87D] rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="h-12 w-12 text-[#0D223A]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#162B47] rounded-full flex items-center justify-center shadow-md border-2 border-[#D1B46A]">
                      <span className="text-lg font-bold text-[#D1B46A]">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#D1B46A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#A8B3C5]">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-2/3 w-1/3 border-t-2 border-dashed border-[#D1B46A]/30"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
