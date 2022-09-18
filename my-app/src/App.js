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
  const gaEventTracker = useAnalyticsEventTracker('Clicks To My Site')
  return (
    <div>
      <Button onClick={() => gaEventTracker('The A Button')}>A - Click Me!</Button>
      <Button onClick={() => gaEventTracker('The B Button')}>B - Click Me!</Button>
      <Button onClick={() => gaEventTracker('The C Button')}>C - Click Me!</Button>
    </div>
  );
}

export default App;
