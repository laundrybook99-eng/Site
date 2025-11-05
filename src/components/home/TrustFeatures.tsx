import { DollarSign, Clock, Star } from 'lucide-react';

export default function TrustFeatures() {
  const features = [
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Affordable rates without compromising on quality'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Fast turnaround with reliable pickup and delivery'
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description: '98% customer satisfaction with quality guarantee'
    }
  ];

  return (
    <section className="py-16 bg-[#0D223A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-[#162B47] border border-[#D1B46A]/20 hover:shadow-lg hover:shadow-[#D1B46A]/5 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D1B46A] to-[#E3C87D] text-[#0D223A] rounded-full mb-4 shadow-lg">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#D1B46A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#A8B3C5]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
