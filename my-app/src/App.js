import React from 'react';
 
import Button from '@mui/material/Button';
import ReactGA from 'react-ga';


const TRACKING_ID = 'UA-241667528-1';

ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

const App = () => {
  const gaEventTracker = useAnalyticsEventTracker('A Button Clicks')
  return (
    <div>
    <h3>Contact Us</h3>
     <div> 
       <a href="#" onClick={()=>gaEventTracker('call')}>Call Us</a>
      </div>
     <div>
       <a href="mailto:someone@example.com" onClick={()=>gaEventTracker('email')}>Write to us</a>
      </div>
  </div>);
}

export default App;
