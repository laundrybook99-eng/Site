import { useState } from 'react';
import { Download, Upload, X } from 'lucide-react';

export default function FranchiseContact() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    model: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build the WhatsApp message using the form data
    const phone = '919908689969';
    const message = `Hello, I would like to apply for a franchise.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCity: ${formData.city}\nPreferred Model: ${formData.model}\nMessage: ${formData.message}`;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab/window
    window.open(waUrl, '_blank');

    // Reset the form
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      model: '',
      message: ''
    });
  };

  return (
  <section id="franchise-contact" className="py-16 bg-[#162B47]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D1B46A] mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-[#A8B3C5]">
            Fill out the form and our team will contact you within 24 hours
          </p>
        </div>

        <div className="bg-[#0D223A] rounded-2xl shadow-xl p-6 sm:p-8 border border-[#D1B46A]/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0D223A] text-[#D1B46A] placeholder-[#A8B3C5] border border-[#D1B46A]/20 rounded-lg focus:ring-2 focus:ring-[#D1B46A] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0D223A] text-[#D1B46A] placeholder-[#A8B3C5] border border-[#D1B46A]/20 rounded-lg focus:ring-2 focus:ring-[#D1B46A] focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                  <label className="block text-sm font-medium text-[#A8B3C5] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D223A] text-[#D1B46A] placeholder-[#A8B3C5] border border-[#D1B46A]/20 rounded-lg focus:ring-2 focus:ring-[#D1B46A] focus:border-transparent"
                    placeholder="john@example.com"
                  />
              </div>
              <div>
                    <label className="block text-sm font-medium text-[#A8B3C5] mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D223A] text-[#D1B46A] placeholder-[#A8B3C5] border border-[#D1B46A]/20 rounded-lg focus:ring-2 focus:ring-[#D1B46A] focus:border-transparent"
                      placeholder="Bangalore"
                    />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#A8B3C5] mb-2">
                Preferred Model *
              </label>
              <select
                required
                value={formData.model}
                onChange={e => setFormData({ ...formData, model: e.target.value })}
                className="w-full px-4 py-3 bg-[#0D223A] text-[#D1B46A] placeholder-[#A8B3C5] border border-[#D1B46A]/20 rounded-lg focus:ring-2 focus:ring-[#D1B46A] focus:border-transparent"
              >
                <option value="">Select a model...</option>
                <option value="retail">Retail Outlet</option>
                <option value="micro">Micro/Hub</option>
                <option value="studio">Full Studio</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#A8B3C5] mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-[#0D223A] text-[#D1B46A] placeholder-[#A8B3C5] border border-[#D1B46A]/20 rounded-lg focus:ring-2 focus:ring-[#D1B46A] focus:border-transparent"
                placeholder="Tell us about your plans..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#A8B3C5] mb-2">
                Upload Documents (Optional)
              </label>
              <div className="border-2 border-dashed border-[#D1B46A]/20 rounded-lg p-6 text-center hover:border-[#D1B46A] transition-colors cursor-pointer">
                <Upload className="h-8 w-8 text-[#D1B46A] mx-auto mb-2" />
                <p className="text-sm text-[#A8B3C5]">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-[#A8B3C5] mt-1">PDF, DOC (max 5MB)</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 py-4 bg-[#D1B46A] text-[#0D223A] rounded-lg font-semibold hover:bg-[#E3C87D] transition-colors"
              >
                Submit Application
              </button>
              <button
                type="button"
                className="flex-1 py-4 bg-[#0D223A] border-2 border-[#D1B46A] text-[#D1B46A] rounded-lg font-semibold hover:bg-[#162B47] transition-colors inline-flex items-center justify-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0D223A] rounded-2xl p-8 max-w-md w-full relative border border-[#D1B46A]/20">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#A8B3C5] hover:text-[#D1B46A]"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D1B46A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#0D223A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D1B46A] mb-2">
                Thank You!
              </h3>
              <p className="text-[#A8B3C5] mb-6">
                Your franchise application has been submitted successfully. Our team will contact you within 24 hours.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="px-8 py-3 bg-[#D1B46A] text-[#0D223A] rounded-lg font-medium hover:bg-[#E3C87D] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
