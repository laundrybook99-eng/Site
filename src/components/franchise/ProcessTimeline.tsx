import { MessageCircle, MapPin, Wrench, Rocket } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Enquire',
      description: 'Submit your interest and we will get in touch'
    },
    {
      icon: MapPin,
      title: 'Site Visit',
      description: 'We help you select the perfect location'
    },
    {
      icon: Wrench,
      title: 'Setup',
      description: 'Complete setup with equipment and training'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Grand opening with marketing support'
    }
  ];

  return (
    <section className="py-16 bg-[#162B47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D1B46A] mb-4">
            Launch Process
          </h2>
          <p className="text-lg text-[#A8B3C5]">
            From enquiry to launch in 4 simple steps
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-[#D1B46A]/30"></div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-24 h-24 bg-[#0D223A] border-4 border-[#D1B46A] rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="h-10 w-10 text-[#D1B46A]" />
                      </div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#D1B46A] text-[#0D223A] text-sm font-bold rounded-full">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#D1B46A] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#A8B3C5]">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
