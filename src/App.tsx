// App.tsx
import AppRoutes from "./routes/AppRoutes";

import { useEffect } from "react";
import { requestNotificationPermission } from "./utils/notification";



function App() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);
  return <AppRoutes />;
}

export default App;