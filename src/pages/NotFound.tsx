
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Settings, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated Robot and Error Code */}
          <div className="mb-8">
            <div className="text-6xl mb-4 animate-bounce">🤖</div>
            <div className="text-8xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              404
            </div>
          </div>

          {/* Error Title and Description */}
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-6">
            Oops! Our Automation Bot Got Lost
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Looks like this page wandered off while our automation was running. 
            Even robots need GPS sometimes! 🗺️
          </p>

          {/* Navigation Suggestions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-6">Where would you like to go instead?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button className="bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-emerald-400/40 px-6 py-3 transition-all duration-300 hover:-translate-y-1">
                  <Home className="mr-2" size={18} />
                  Back Home
                </Button>
              </Link>
              <Link to="/solutions/workflow-automation">
                <Button className="bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-emerald-400/40 px-6 py-3 transition-all duration-300 hover:-translate-y-1">
                  <Settings className="mr-2" size={18} />
                  View Solutions
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-emerald-400/40 px-6 py-3 transition-all duration-300 hover:-translate-y-1">
                  <MessageCircle className="mr-2" size={18} />
                  Get Help
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 rounded-2xl p-8">
            <p className="text-lg text-gray-300 mb-6">
              Still lost? Our human team is standing by to help!
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                Book Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <div className="mt-4 text-white/80 text-sm">
              ✓ 30-minute strategy session ✓ Custom automation recommendations ✓ No obligation
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-8 text-gray-400 text-sm">
            <p>Error Code: {location.pathname} • Time: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
