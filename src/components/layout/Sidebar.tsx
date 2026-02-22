import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{ width: "220px", background: "#0f172a", padding: "2rem" }}>
      <h2 style={{ color: "#22c55e", marginBottom: "2rem" }}>
        LaunchGuard
      </h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}