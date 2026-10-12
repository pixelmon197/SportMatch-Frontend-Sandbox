import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { MemoryProvider } from "./context/MemoryContext";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MemoryProvider>
          <AppRoutes />
        </MemoryProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
