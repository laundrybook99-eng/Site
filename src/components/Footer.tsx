import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0D223A] text-[#A8B3C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/IMG_1154.JPG"
                alt="Laundry Book"
                className="h-16 w-16 object-contain"
              />
              <span className="ml-2 text-xl font-bold text-[#D1B46A]">
                Laundry Book
              </span>
            </div>
            <p className="text-sm">
              Premium laundry services at your doorstep. Quality care for your garments.
            </p>
          </div>

          <div>
            <h3 className="text-[#D1B46A] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#E3C87D] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('franchise')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Franchise
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stores')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Stores
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>Laundrybook99@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 99086 89969</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1CSNyCUg8s/"
                className="hover:text-teal-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/l_book5758?t=o2-zDIYT_VWrI6iQtIL-Ug&s=09"
                className="hover:text-teal-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/laundrybook9?igsh=MWJvZnUxeWZrZjVrNw=="
                className="hover:text-teal-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2024 - 2025 Laundry Book. All rights reserved.Made with <a href="https://staffarc.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">staffarc</p>
        </div>
      </div>
    </footer>
  );
}
