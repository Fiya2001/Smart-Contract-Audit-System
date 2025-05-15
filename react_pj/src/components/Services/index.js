import React from 'react';
import Icon1 from '../../images/icon1.png';
import Icon2 from '../../images/icon2.png';
import Icon3 from '../../images/icon3.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    // ServicesContainer represents the main container for this section.
    <ServicesContainer id='services'>
      <ServicesH1>Why Use SmartSystem ?</ServicesH1>
      <ServicesP>Smart contract scanning tools are designed to find vulnerabilities in your code and reduce risks.</ServicesP>
      <ServicesWrapper> 
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Initiate Scans</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Publish Reports</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Easy Integrations</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
