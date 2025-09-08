// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/dashboard")
      .then(res => setMessage(res.data.message))
      .catch(() => navigate("/"));
  }, [navigate]);

  const handleLogout = async () => {
    await api.post("/logout");
    navigate("/");
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p className="mb-4">{message}</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-5 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
