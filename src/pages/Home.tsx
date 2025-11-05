import HeroSection from '../components/home/HeroSection';
import TrustFeatures from '../components/home/TrustFeatures';
import ServicesGrid from '../components/home/ServicesGrid';
import BookingWidget from '../components/home/BookingWidget';
import LocationPicker from '../components/home/LocationPicker';
import HowItWorks from '../components/home/HowItWorks';
import AppDownload from '../components/home/AppDownload';
import FAQAccordion from '../components/FAQAccordion';
import { homeFAQs } from '../data/mockData';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesGrid />
      <BookingWidget />
      <TrustFeatures />
      <HowItWorks />
      <section className="py-16 bg-[#0D223A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#D1B46A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#A8B3C5]">
              Everything you need to know about our services
            </p>
          </div>
          <FAQAccordion faqs={homeFAQs} />
        </div>
      </section>
    </div>
  );
}
