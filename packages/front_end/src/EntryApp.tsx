import React, {useEffect} from 'react';

import {WithSplashScreen} from './SplashScreen';
import App from './App';

const AppWithSplashScreen = () => {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    async function initialize() {
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsReady(true);
    }

    initialize();
  }, []);

  return (
    <WithSplashScreen isAppReady={isReady}>
      {isReady && <App />}
    </WithSplashScreen>
  );
};

export default AppWithSplashScreen;
