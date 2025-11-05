import { Star } from 'lucide-react';
import { testimonials } from '../../data/mockData';

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#0D223A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D1B46A] mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-[#A8B3C5]">
            Hear from our successful franchise partners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-[#162B47] rounded-xl p-6 hover:shadow-lg transition-shadow border border-[#D1B46A]/20"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-[#D1B46A] fill-current"
                  />
                ))}
              </div>
              <p className="text-[#A8B3C5] mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-[#D1B46A]">{testimonial.name}</p>
                <p className="text-sm text-[#A8B3C5]">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#162B47] rounded-2xl p-8 border border-[#D1B46A]/20">
          <h3 className="text-2xl font-bold text-[#D1B46A] mb-4 text-center">
            Franchise Locations
          </h3>
          <div className="aspect-video bg-[#0D223A] rounded-xl overflow-hidden border border-[#D1B46A]/20">
            <img
              src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Franchise territories map"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-[#A8B3C5] mt-4">
            Operating in 50+ cities across India
          </p>
        </div>
      </div>
    </section>
  );
}
