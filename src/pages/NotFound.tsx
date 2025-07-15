
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NetworkBackground from '@/components/NetworkBackground';

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-[#0F0F0F]">
      <NetworkBackground />
      <Header />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-8xl font-bold text-emerald-500 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-gray-600 text-gray-300 hover:bg-gray-700 flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
