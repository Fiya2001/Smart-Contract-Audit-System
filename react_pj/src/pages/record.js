import React from 'react';
import { createRoot } from 'react-dom';
import RecordComponent from '../components/recorder'; 
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import reportWebVitals from '../components/recorder/reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

// Create a root element for rendering the app
const root = createRoot(document.getElementById('root'));

function RecordPage() {
  // Render the app inside a Router and StrictMode
  root.render(
    <Router>
      <React.StrictMode>
        <ScrollToTop />
        <RecordComponent />
      </React.StrictMode>
    </Router>
  );
}

reportWebVitals();

export default RecordPage;
