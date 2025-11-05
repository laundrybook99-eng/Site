import { franchiseModels } from '../../data/mockData';
import { Check } from 'lucide-react';

export default function FranchiseModels() {
  return (
    <section className="py-16 bg-[#0D223A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D1B46A] mb-4">
            Choose Your Model
          </h2>
          <p className="text-lg text-[#A8B3C5]">
            Select the franchise model that fits your investment and space requirements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {franchiseModels.map(model => (
            <div
              key={model.id}
              className="bg-[#162B47] rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-[#D1B46A]/20"
            >
              <div className="bg-[#0D223A] border-b border-[#D1B46A]/20 p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#D1B46A]">{model.name}</h3>
                <p className="text-[#A8B3C5]">{model.description}</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-[#D1B46A]">
                      {model.investment}
                    </span>
                  </div>
                  <p className="text-[#A8B3C5]">Total Investment</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-[#D1B46A] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#A8B3C5]">Space: {model.space}</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-[#D1B46A] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#A8B3C5]">Complete Setup Support</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-[#D1B46A] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#A8B3C5]">Training Included</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-[#D1B46A] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#A8B3C5]">Marketing Materials</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('franchise-contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="w-full py-3 bg-[#D1B46A] text-[#0D223A] rounded-lg font-medium hover:bg-[#E3C87D] transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
