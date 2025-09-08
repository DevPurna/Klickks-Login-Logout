// src/components/Register.js
import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", { email, password });
      setMessage(res.data.message);
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-500">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-lg outline-blue-400 pl-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-lg outline-blue-400 pl-3"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
        {message && <p className="mb-4 text-green-500">**{message}</p>}
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/")}
          className="text-blue-500 cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;
