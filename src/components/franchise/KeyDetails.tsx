import { DollarSign, Building2, TrendingUp, Users } from 'lucide-react';

export default function KeyDetails() {
  const details = [
    {
      icon: DollarSign,
      label: 'Investment Range',
      value: '₹8-35 Lakhs'
    },
    {
      icon: Building2,
      label: 'Outlet Size',
      value: '300-1500 sq ft'
    },
    {
      icon: TrendingUp,
      label: 'Payback Period',
      value: '12-18 Months'
    },
    {
      icon: Users,
      label: 'Franchise Fee',
      value: '₹2-5 Lakhs'
    }
  ];

  const features = [
    'Comprehensive Training & Support',
    'Site Selection & Setup Assistance',
    'CRM & Dashboard Access'
  ];

  return (
    <section className="py-16 bg-[#162B47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D1B46A] mb-4">
            Franchise Overview
          </h2>
          <p className="text-lg text-[#A8B3C5]">
            Everything you need to know about our franchise opportunity
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="bg-[#0D223A] p-6 rounded-xl text-center border border-[#D1B46A]/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D1B46A] text-[#0D223A] rounded-full mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm text-[#A8B3C5] mb-1">{detail.label}</p>
                <p className="text-xl font-bold text-[#D1B46A]">{detail.value}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-[#0D223A] rounded-2xl p-8 border border-[#D1B46A]/20">
          <h3 className="text-2xl font-bold text-[#D1B46A] mb-6 text-center">
            What We Provide
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#D1B46A] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-[#0D223A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-[#A8B3C5] font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
