"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";

export default function FarmerLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // ✅ Now it will work!

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!response.ok || !contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response from server");
      }
  
      const data = await response.json();
      localStorage.setItem("token", data.token);
      router.push("/dashboard/customer");
    } catch (err: any) {
      setError(err.message);
    }
  };
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-sm shadow-xl rounded-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Customer Login</h2>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-500" />
              <Input
                type="email"
                placeholder="Email"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-500" />
              <Input
                type="password"
                placeholder="Password"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
          </div>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link href="/register/customer" className="text-blue-600">
              Register here
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}