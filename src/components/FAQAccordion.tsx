import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../types';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="bg-[#162B47] rounded-lg shadow-md border border-[#D1B46A]/20 overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 flex justify-between items-center hover:bg-[#0D223A] transition-colors"
          >
            <span className="text-left font-medium text-[#D1B46A]">
              {faq.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-[#D1B46A] transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-[#A8B3C5]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
