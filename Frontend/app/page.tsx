// import { Button } from "@/components/ui/button"
// import { Milk } from "lucide-react"
// import Link from "next/link"

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-4 py-16">
//         <nav className="flex justify-between items-center mb-16">
//           <div className="flex items-center space-x-2">
//             <Milk className="h-8 w-8 text-blue-600" />
//             <span className="text-2xl font-bold text-gray-900 dark:text-white">Mountain Men Dairy</span>
//           </div>
//           {/* <div className="space-x-4">
//             <Link href="login/farmer">
//               <Button variant="outline">Login</Button>
//             </Link>
//             <Link href="login/farmer">
//               <Button>Register</Button>
//             </Link>
//           </div> */}
//         </nav>

//         <main className="text-center">
//           <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
//             Fresh Milk from the Mountains
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
//             Connect directly with local dairy farmers and get fresh, high-quality milk delivered to your doorstep.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">For Farmers</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">Manage your dairy production and connect with customers directly.</p>
//               <Link href="dashboard/farmer">
//                 <Button variant="outline" className="w-full">Farmer Dashboard</Button>
//               </Link>
//             </div>
            
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">For Customers</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">Order fresh milk and schedule deliveries at your convenience.</p>
//               <Link href="login/farmer">
//                 <Button variant="outline" className="w-full">Customer Dashboard</Button>
//               </Link>
//             </div>
            
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">For Admins</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">Monitor production and manage the platform efficiently.</p>
//               <Link href="dashboard/admin">
//                 <Button variant="outline" className="w-full">Admin Dashboard</Button>
//               </Link>
//             </div>
//           </div>

//           <div className="bg-blue-50 dark:bg-gray-800 p-12 rounded-2xl">
//             <h2 className="text-3xl font-bold mb-8">Why Choose Mountain Men Dairy?</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Fresh & Local</h3>
//                 <p className="text-gray-600 dark:text-gray-300">Direct from local mountain farms to your table</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
//                 <p className="text-gray-600 dark:text-gray-300">Strict quality controls and testing</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Flexible Delivery</h3>
//                 <p className="text-gray-600 dark:text-gray-300">Schedule deliveries at your convenience</p>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }
"use client"
import { Button } from "@/components/ui/button";
import { Milk } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<{ role: string } | null>(null);

  useEffect(() => {
    // Simulating user authentication check (Replace this with actual API call)
    const loggedInUser = JSON.parse(localStorage.getItem("user") || "null");
    setUser(loggedInUser);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Milk className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Mountain Men Dairy
            </span>
          </div>
        </nav>

        <main className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Fresh Milk from the Mountains
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Connect directly with local dairy farmers and get fresh, high-quality milk delivered to your doorstep.
          </p>

          {/* DASHBOARD BUTTONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">For Farmers</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Manage your dairy production and connect with customers directly.</p>
              {user?.role === "farmer" ? (
                <Link href="login/farmer">
                  <Button variant="outline" className="w-full">Farmer Dashboard</Button>
                </Link>
              ) : (
                <Link href="login/farmer">
                  <Button variant="outline" className="w-full">Login as Farmer</Button>
                </Link>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">For Customers</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Order fresh milk and schedule deliveries at your convenience.</p>
              {user?.role === "customer" ? (
                <Link href="dashboard/customer">
                  <Button variant="outline" className="w-full">Customer Dashboard</Button>
                </Link>
              ) : (
                <Link href="login/customer">
                  <Button variant="outline" className="w-full">Login as Customer</Button>
                </Link>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">For Admins</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Monitor production and manage the platform efficiently.</p>
              {user?.role === "admin" ? (
                <Link href="dashboard/admin">
                  <Button variant="outline" className="w-full">Admin Dashboard</Button>
                </Link>
              ) : (
                <Link href="login/admin">
                  <Button variant="outline" className="w-full">Login as Admin</Button>
                </Link>
              )}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-gray-800 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8">Why Choose Mountain Men Dairy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Fresh & Local</h3>
                <p className="text-gray-600 dark:text-gray-300">Direct from local mountain farms to your table</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-gray-600 dark:text-gray-300">Strict quality controls and testing</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">Schedule deliveries at your convenience</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
