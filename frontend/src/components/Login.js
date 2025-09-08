// src/components/Login.js
import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      setMessage(res.data.message);
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold mb-4 text-center text-green-500">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-lg outline-green-300 pl-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-lg outline-green-300 pl-3"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Login
        </button>
        {message && <p className="mb-4 text-red-500">{message}</p>}
      </form>
      <p className="mt-4 text-sm">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-blue-500 cursor-pointer"
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
