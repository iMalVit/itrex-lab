import React, { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';

import useInit from './store/hooks/useInit';

const App = () => {
  const { start } = useInit();

  useEffect(() => {
    start();
  }, [start]);

  return <AppRoutes />;
};

export default App;
