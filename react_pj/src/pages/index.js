import React, { useState } from 'react';

// Import components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Upload from '../components/Uplond';

// Import data for InfoSection
import { homeObjTwo, homeObjThree } from '../components/InfoSection/Data';

// Define the Home component
function Home() {
  // Define a state variable isOpen and a function setIsOpen to control the sidebar's open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar's open/close state
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection />
      <Upload />
      <InfoSection {...homeObjTwo} />
      <Services />
      {/* <InfoSection {...homeObjThree} /> */}
      <Footer />
    </>
  );
}

// Export the Home component as the default export
export default Home;
