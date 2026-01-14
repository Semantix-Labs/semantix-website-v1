import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

// Initialize GA4 - Replace with your Measurement ID
// You can also move this to an environment variable: import.meta.env.VITE_GA_MEASUREMENT_ID
const GA_MEASUREMENT_ID = "G-WJTX5VFRL8";

ReactGA.initialize(GA_MEASUREMENT_ID);

const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Send pageview with a custom path
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);

    return null;
};

export default GoogleAnalytics;
