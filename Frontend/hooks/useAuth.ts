'use client';

import { useContext } from "react";
import { AuthContext } from "../app/context/AuthContext";  // Ensure AuthContext is in context folder

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;  // Ensure it returns user and setUser
}
