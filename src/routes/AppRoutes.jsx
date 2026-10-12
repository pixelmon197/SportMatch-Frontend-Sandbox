import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import ProtectedRoute from "./ProtectedRoute";
import { PANELS, PANEL_ORDER } from "../config/panels";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import HomeView from "../views/HomeView";
import PanelView from "../views/PanelView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginView />} />
      <Route path="/registro" element={<RegisterView />} />
      <Route element={<AppLayout />}>
        <Route index element={<HomeView />} />
        {PANEL_ORDER.map((k) => (
          <Route
            key={k}
            path={PANELS[k].path}
            element={
              <ProtectedRoute panel={k}>
                <PanelView panelKey={k} />
              </ProtectedRoute>
            }
          />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
