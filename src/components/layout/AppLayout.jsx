import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="layout">
      <Topbar />
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
