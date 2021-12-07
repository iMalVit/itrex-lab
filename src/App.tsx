import React from "react";
import AppRoutes from "./routes/AppRoutes";

import { useEffect } from "react";
import { useInit } from "./store/hooks/useInit";

const App = () => {
  const { start } = useInit();

  useEffect(() => {
    start();
  }, [start]);

  return <AppRoutes />;
};

export default App;
