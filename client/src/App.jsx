import React from "react";
import AppRoutes from "./routes/Approutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    // AuthProvider wraps the entire app to provide authentication context
    <AuthProvider>
      {/* Define application routes */}
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
