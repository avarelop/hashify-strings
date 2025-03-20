
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md glassmorphism rounded-2xl p-8 animate-fade-up">
        <div className="w-20 h-20 bg-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-light">404</span>
        </div>
        <h1 className="text-2xl font-semibold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
