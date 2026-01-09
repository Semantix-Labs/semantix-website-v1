import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import SemanixLogo from "@/components/SemanixLogo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
      <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-md mx-auto">
          <SemanixLogo className="h-12 w-auto mx-auto mb-8" />
          
          <div className="glass-card p-8 rounded-2xl">
            <div className="text-6xl font-bold gradient-text mb-4">404</div>
            <h1 className="text-2xl font-semibold mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.history.back()} 
                variant="outline" 
                className="border-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
              <Button 
                onClick={() => window.location.href = "/"} 
                className="btn-primary"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
