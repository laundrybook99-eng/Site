import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Franchise from './pages/Franchise';
import Stores from './pages/Stores';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'franchise':
        return <Franchise />;
      case 'stores':
        return <Stores />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
