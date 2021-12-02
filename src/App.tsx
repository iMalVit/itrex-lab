import React from "react";
import AppRoutes from "./routes/AppRoutes";

import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { getToken } from "./store/token";
import { useInit } from "./store/hooks/useInit";

const App = () => {
  const { start } = useInit();
  const dispatch = useAppDispatch();

  useEffect(() => {
    start();
  }, []);

  return <AppRoutes />;
};

export default App;
