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
    <div className="App">
      <Button variant="contained">
        <a href="#" onClick={() => gaEventTracker}>A - Click Me!</a>
      </Button>
      <Button>B - Click Me!</Button>
      <Button variant="contained">C - Click Me!</Button>
    </div>
  );
}

export default App;
