import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Define a functional component for scrolling to the top of the page
export default function ScrollToTop() {
  // Access the current location (pathname) using the useLocation hook
  const { pathname } = useLocation();

  // Use the useEffect hook to perform an action when pathname changes
  useEffect(() => {
    // Scroll the page to the top (0, 0) when the route changes
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname

  // Return null because this component doesn't render visible content
  return null;
}
