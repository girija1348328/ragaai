// Sidebar.tsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-8">🏥 Healthcare</h2>

      <nav className="flex flex-col gap-4 text-gray-300">
        <Link className="hover:text-white" to="/dashboard">Dashboard</Link>
        <Link className="hover:text-white" to="/patients">Patients</Link>
        <Link className="hover:text-white" to="/analytics">Analytics</Link>
      </nav>
    </div>
  );
}