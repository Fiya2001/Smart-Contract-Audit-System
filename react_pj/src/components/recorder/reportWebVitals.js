// This function is responsible for reporting web vitals metrics.
const reportWebVitals = (onPerfEntry) => {
  // Check if onPerfEntry is a function and exists
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call the getCLS function with onPerfEntry as a callback
      getCLS(onPerfEntry);
      // Call the getFID function with onPerfEntry as a callback
      getFID(onPerfEntry);
      // Call the getFCP function with onPerfEntry as a callback
      getFCP(onPerfEntry);
      // Call the getLCP function with onPerfEntry as a callback
      getLCP(onPerfEntry);
      // Call the getTTFB function with onPerfEntry as a callback
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function for use in other parts of the application
export default reportWebVitals;
