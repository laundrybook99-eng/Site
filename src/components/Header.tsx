import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'franchise', label: 'Franchise' },
    { id: 'stores', label: 'Stores' }
  ];

  return (
    <header className="bg-[#0D223A] shadow-lg sticky top-0 z-50 border-b border-[#D1B46A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src="/IMG_1154.JPG"
              alt="Laundry Book"
              className="h-14 w-14 object-contain"
            />
            <span className="ml-3 text-2xl font-bold text-[#D1B46A]">
              Laundry Book
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-[#E3C87D]'
                    : 'text-[#A8B3C5] hover:text-[#D1B46A]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#D1B46A]" />
            ) : (
              <Menu className="h-6 w-6 text-[#D1B46A]" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#162B47] border-t border-[#D1B46A]/20">
          <div className="px-4 py-4 space-y-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg ${
                  currentPage === item.id
                    ? 'bg-[#0D223A] text-[#E3C87D] font-medium border border-[#D1B46A]/20'
                    : 'text-[#A8B3C5] hover:bg-[#0D223A] hover:text-[#D1B46A]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 space-y-2">
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
