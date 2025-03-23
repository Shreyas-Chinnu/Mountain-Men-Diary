// // // // // 'use client';

// // // // // import { useState, useEffect } from 'react';
// // // // // import { fetchMilkProduction, addMilkProduction } from '../../../lib/services/farmerService';
// // // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // import { Button } from '@/components/ui/button';
// // // // // import { Input } from '@/components/ui/input';
// // // // // import { Plus, Loader2 } from 'lucide-react';
// // // // // import MilkProduction from '@/models/MilkProduction';
// // // // // import { useSession } from 'next-auth/react';

// // // // // export default function FarmerDashboard() {
// // // // //   interface MilkRecord {
// // // // //     date: string;
// // // // //     session: string;
// // // // //     quantity: number;
// // // // //   }

  
// // // // //   const { data: session } = useSession();
// // // // //   const farmerId = session?.user?.email as string | undefined; // Assuming email is used as the farmer ID

// // // // //   const [milkProduction, setMilkProduction] = useState<MilkRecord[]>([]);
// // // // //   const [quantity, setQuantity] = useState('');
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   // const session = new Date().getHours() < 12 ? 'morning' : 'evening';
// // // // //   // const farmerId = 'userId'; // Replace with actual farmer ID

// // // // //   // useEffect(() => {
// // // // //   //   const getData = async () => {
// // // // //   //     const data = await fetchMilkProduction(farmerId);
// // // // //   //     setMilkProduction(data);
// // // // //   //   };
// // // // //   //   getData();
// // // // //   // }, []);
// // // // //   useEffect(() => {
// // // // //     const getData = async () => {
// // // // //       try {
// // // // //         const data = await fetchMilkProduction(farmerId);
// // // // //         console.log("Fetched Milk Production Data:", data); // Debugging Log
// // // // //         setMilkProduction(data || []);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching milk production:", error);
// // // // //       }
// // // // //     };
// // // // //     getData();
// // // // //   }, []);  

// // // // //   const handleAddProduction = async () => {
// // // // //     if (!quantity) return;
    
// // // // //     try {
// // // // //         setLoading(true);
// // // // //         const response = await addMilkProduction(farmerId, Number(quantity), session);
        
// // // // //         if (response.success) {
// // // // //             // Fetch updated data
// // // // //             const updatedData = await fetchMilkProduction(farmerId);
// // // // //             setMilkProduction(updatedData);
// // // // //             setQuantity('');
// // // // //             // Show success message
// // // // //             alert('Milk production added successfully!');
// // // // //         }
// // // // //     } catch (error: any) {
// // // // //         console.error('Error adding milk production:', error);
// // // // //         alert(error.response?.data?.message || 'Failed to add milk production');
// // // // //     } finally {
// // // // //         setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 max-w-4xl mx-auto">
// // // // //       <Card className="mb-6">
// // // // //         <CardHeader>
// // // // //           <CardTitle className="text-2xl">Milk Production</CardTitle>
// // // // //         </CardHeader>
// // // // //         <CardContent>
// // // // //           <div className="flex flex-col space-y-4">
// // // // //             {milkProduction && milkProduction.length > 0 ? (
// // // // //               milkProduction.map((record, index) => (
// // // // //                 <div key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
// // // // //                   <span className="text-lg font-medium">{record.date} ({record.session})</span>
// // // // //                   <span className="text-lg font-semibold">{record.quantity} L</span>
// // // // //                 </div>
// // // // //               ))
// // // // //             ) : (
// // // // //               <p className="text-gray-500">No records available</p>
// // // // //             )}
// // // // //           </div>
// // // // //         </CardContent>
// // // // //       </Card>
// // // // //       <Card>
// // // // //         <CardHeader>
// // // // //           <CardTitle className="text-xl">Add Production</CardTitle>
// // // // //         </CardHeader>
// // // // //         <CardContent>
// // // // //           <div className="flex gap-4 items-center">
// // // // //             <Input type="number" placeholder="Enter quantity (L)" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
// // // // //             <Button onClick={handleAddProduction} disabled={loading}>
// // // // //               {loading ? <Loader2 className="animate-spin" /> : <Plus />}
// // // // //               Add
// // // // //             </Button>
// // // // //           </div>
// // // // //         </CardContent>
// // // // //       </Card>
// // // // //     </div>
// // // // //   );
// // // // // }





// // // // // 'use client';

// // // // // import { useState, useEffect } from 'react';
// // // // // import { useSession } from 'next-auth/react';  // ✅ Import inside the component file
// // // // // import { fetchMilkProduction, addMilkProduction } from '../../../lib/services/farmerService';
// // // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // import { Button } from '@/components/ui/button';
// // // // // import { Input } from '@/components/ui/input';
// // // // // import { Plus, Loader2 } from 'lucide-react';

// // // // // export default function FarmerDashboard() {
// // // // //   interface MilkRecord {
// // // // //     date: string;
// // // // //     session: string;
// // // // //     quantity: number;
// // // // //   }

// // // // //   const { data: session } = useSession();  // ✅ Move this inside the component
// // // // //   const farmerId = session?.user?.email || "";  // ✅ Get Farmer ID dynamically

// // // // //   const [milkProduction, setMilkProduction] = useState<MilkRecord[]>([]);
// // // // //   const [quantity, setQuantity] = useState('');
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const sessionTime = new Date().getHours() < 12 ? 'morning' : 'evening';

// // // // //   useEffect(() => {
// // // // //     if (!farmerId) return;  // ✅ Ensure farmerId is available before fetching

// // // // //     const getData = async () => {
// // // // //       try {
// // // // //         const data = await fetchMilkProduction(farmerId);
// // // // //         console.log("Fetched Milk Production Data:", data); // Debugging Log
// // // // //         setMilkProduction(data || []);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching milk production:", error);
// // // // //       }
// // // // //     };
// // // // //     getData();
// // // // //   }, [farmerId]);  // ✅ Re-run when farmerId changes  

// // // // //   const handleAddProduction = async () => {
// // // // //     if (!quantity || !farmerId) {
// // // // //       alert("Farmer ID is missing!");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       setLoading(true);
// // // // //       console.log("Sending Request with Farmer ID:", farmerId); // Debugging Log

// // // // //       const response = await addMilkProduction(farmerId, Number(quantity), sessionTime);

// // // // //       if (response.success) {
// // // // //         const updatedData = await fetchMilkProduction(farmerId);
// // // // //         setMilkProduction(updatedData);
// // // // //         setQuantity('');
// // // // //         alert('Milk production added successfully!');
// // // // //       }
// // // // //     } catch (error: any) {
// // // // //       console.error('Error adding milk production:', error);
// // // // //       alert(error.response?.data?.message || 'Failed to add milk production');
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 max-w-4xl mx-auto">
// // // // //       <Card className="mb-6">
// // // // //         <CardHeader>
// // // // //           <CardTitle className="text-2xl">Milk Production</CardTitle>
// // // // //         </CardHeader>
// // // // //         <CardContent>
// // // // //           <div className="flex flex-col space-y-4">
// // // // //             {milkProduction && milkProduction.length > 0 ? (
// // // // //               milkProduction.map((record, index) => (
// // // // //                 <div key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
// // // // //                   <span className="text-lg font-medium">{record.date} ({record.session})</span>
// // // // //                   <span className="text-lg font-semibold">{record.quantity} L</span>
// // // // //                 </div>
// // // // //               ))
// // // // //             ) : (
// // // // //               <p className="text-gray-500">No records available</p>
// // // // //             )}
// // // // //           </div>
// // // // //         </CardContent>
// // // // //       </Card>
// // // // //       <Card>
// // // // //         <CardHeader>
// // // // //           <CardTitle className="text-xl">Add Production</CardTitle>
// // // // //         </CardHeader>
// // // // //         <CardContent>
// // // // //           <div className="flex gap-4 items-center">
// // // // //             <Input type="number" placeholder="Enter quantity (L)" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
// // // // //             <Button onClick={handleAddProduction} disabled={loading}>
// // // // //               {loading ? <Loader2 className="animate-spin" /> : <Plus />}
// // // // //               Add
// // // // //             </Button>
// // // // //           </div>
// // // // //         </CardContent>
// // // // //       </Card>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // 'use client';

// // // // // import { useState, useEffect } from 'react';
// // // // // import { useSession } from 'next-auth/react';
// // // // // import { fetchMilkProduction, addMilkProduction, fetchFarmerIdByEmail } from '../../../lib/services/farmerService';
// // // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // import { Button } from '@/components/ui/button';
// // // // // import { Input } from '@/components/ui/input';
// // // // // import { Plus, Loader2 } from 'lucide-react';

// // // // // export default function FarmerDashboard() {
// // // // //   interface MilkRecord {
// // // // //     date: string;
// // // // //     session: string;
// // // // //     quantity: number;
// // // // //   }

// // // // //   const { data: session } = useSession();
// // // // //   const email = session?.user?.email || '';  // ✅ Use email first
// // // // //   const [farmerId, setFarmerId] = useState<string | null>(null);

// // // // //   const [milkProduction, setMilkProduction] = useState<MilkRecord[]>([]);
// // // // //   const [quantity, setQuantity] = useState('');
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const sessionTime = new Date().getHours() < 12 ? 'morning' : 'evening';

// // // // //   useEffect(() => {
// // // // //     if (!email) return;

// // // // //     const getFarmerId = async () => {
// // // // //       try {
// // // // //         const id = await fetchFarmerIdByEmail(email);
// // // // //         console.log("Fetched Farmer ID:", id);
// // // // //         setFarmerId(id);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching Farmer ID:", error);
// // // // //       }
// // // // //     };
// // // // //     getFarmerId();
// // // // //   }, [email]);

// // // // //   useEffect(() => {
// // // // //     if (!farmerId) return;

// // // // //     const getData = async () => {
// // // // //       try {
// // // // //         const data = await fetchMilkProduction(farmerId);
// // // // //         console.log("Fetched Milk Production Data:", data);
// // // // //         setMilkProduction(data || []);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching milk production:", error);
// // // // //       }
// // // // //     };
// // // // //     getData();
// // // // //   }, [farmerId]);

// // // // //   const handleAddProduction = async () => {
// // // // //     if (!quantity || !farmerId) {
// // // // //       alert("Farmer ID is missing!");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       setLoading(true);
// // // // //       console.log("Sending Request with Farmer ID:", farmerId);

// // // // //       const response = await addMilkProduction(farmerId, Number(quantity), sessionTime);

// // // // //       if (response.success) {
// // // // //         const updatedData = await fetchMilkProduction(farmerId);
// // // // //         setMilkProduction(updatedData);
// // // // //         setQuantity('');
// // // // //         alert('Milk production added successfully!');
// // // // //       }
// // // // //     } catch (error: any) {
// // // // //       console.error('Error adding milk production:', error);
// // // // //       alert(error.response?.data?.message || 'Failed to add milk production');
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 max-w-4xl mx-auto">
// // // // //       <Card className="mb-6">
// // // // //         <CardHeader>
// // // // //           <CardTitle className="text-2xl">Milk Production</CardTitle>
// // // // //         </CardHeader>
// // // // //         <CardContent>
// // // // //           <div className="flex flex-col space-y-4">
// // // // //             {milkProduction.length > 0 ? (
// // // // //               milkProduction.map((record, index) => (
// // // // //                 <div key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
// // // // //                   <span className="text-lg font-medium">{record.date} ({record.session})</span>
// // // // //                   <span className="text-lg font-semibold">{record.quantity} L</span>
// // // // //                 </div>
// // // // //               ))
// // // // //             ) : (
// // // // //               <p className="text-gray-500">No records available</p>
// // // // //             )}
// // // // //           </div>
// // // // //         </CardContent>
// // // // //       </Card>
// // // // //       <Card>
// // // // //         <CardHeader>
// // // // //           <CardTitle className="text-xl">Add Production</CardTitle>
// // // // //         </CardHeader>
// // // // //         <CardContent>
// // // // //           <div className="flex gap-4 items-center">
// // // // //             <Input type="number" placeholder="Enter quantity (L)" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
// // // // //             <Button onClick={handleAddProduction} disabled={loading}>
// // // // //               {loading ? <Loader2 className="animate-spin" /> : <Plus />}
// // // // //               Add
// // // // //             </Button>
// // // // //           </div>
// // // // //         </CardContent>
// // // // //       </Card>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";
// // // // import { useState, useEffect } from 'react';
// // // // import { useSession } from 'next-auth/react';
// // // // import { fetchMilkProduction, addMilkProduction } from '../../../lib/services/farmerService';
// // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // import { Button } from '@/components/ui/button';
// // // // import { Input } from '@/components/ui/input';
// // // // import { Plus, Loader2 } from 'lucide-react';
// // // // import axios from 'axios';

// // // // export default function FarmerDashboard() {
// // // //   interface MilkRecord {
// // // //     date: string;
// // // //     session: string;
// // // //     quantity: number;
// // // //   }

// // // //   const { data: session } = useSession();
// // // //   const [farmerId, setFarmerId] = useState<string | null>(null);
// // // //   const [milkProduction, setMilkProduction] = useState<MilkRecord[]>([]);
// // // //   const [quantity, setQuantity] = useState('');
// // // //   const [loading, setLoading] = useState(false);
// // // //   const sessionTime = new Date().getHours() < 12 ? 'morning' : 'evening';

// // // //   // Fetch the farmer ID from the backend
// // // //   useEffect(() => {
// // // //     const getFarmerId = async () => {
// // // //       if (!session?.user?.email) return;
      
// // // //       try {
// // // //         const response = await axios.get(`/api/farmer/email/${session.user.email}`);
// // // //         setFarmerId(response.data.farmerId);
// // // //       } catch (error) {
// // // //         console.error("Error fetching Farmer ID:", error);
// // // //       }
// // // //     };

// // // //     getFarmerId();
// // // //   }, [session]);

// // // //   // Fetch Milk Production Data
// // // //   useEffect(() => {
// // // //     if (!farmerId) return;

// // // //     const getData = async () => {
// // // //       try {
// // // //         const data = await fetchMilkProduction(farmerId);
// // // //         setMilkProduction(data || []);
// // // //       } catch (error) {
// // // //         console.error("Error fetching milk production:", error);
// // // //       }
// // // //     };
// // // //     getData();
// // // //   }, [farmerId]);

// // // //   const handleAddProduction = async () => {
// // // //     if (!quantity || !farmerId) {
// // // //       alert("Farmer ID is missing or quantity is empty!");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       setLoading(true);
// // // //       console.log("Adding production for Farmer ID:", farmerId);

// // // //     const response = await fetch("/api/farmers/milk-production", {
// // // //       method: "POST",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify({ farmerId, quantity }),
// // // //     });

// // // //     const data = await response.json();

// // // //     if (!data.success) {
// // // //       alert(data.message || "Failed to update production");
// // // //     }
// // // //   } catch (error) {
// // // //     console.error("Error:", error);
// // // //   } finally {
// // // //     setLoading(false);
// // // //   }
// // // // };
 
// // // //   return (
// // // //     <div className="p-6 max-w-4xl mx-auto">
// // // //       <Card className="mb-6">
// // // //         <CardHeader>
// // // //           <CardTitle className="text-2xl">Milk Production</CardTitle>
// // // //         </CardHeader>
// // // //         <CardContent>
// // // //           <div className="flex flex-col space-y-4">
// // // //             {milkProduction.length > 0 ? (
// // // //               milkProduction.map((record, index) => (
// // // //                 <div key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
// // // //                   <span className="text-lg font-medium">{record.date} ({record.session})</span>
// // // //                   <span className="text-lg font-semibold">{record.quantity} L</span>
// // // //                 </div>
// // // //               ))
// // // //             ) : (
// // // //               <p className="text-gray-500">No records available</p>
// // // //             )}
// // // //           </div>
// // // //         </CardContent>
// // // //       </Card>
// // // //       <Card>
// // // //         <CardHeader>
// // // //           <CardTitle className="text-xl">Add Production</CardTitle>
// // // //         </CardHeader>
// // // //         <CardContent>
// // // //           <div className="flex gap-4 items-center">
// // // //             <Input type="number" placeholder="Enter quantity (L)" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
// // // //             <Button onClick={handleAddProduction} disabled={loading}>
// // // //               {loading ? <Loader2 className="animate-spin" /> : <Plus />}
// // // //               Add
// // // //             </Button>
// // // //           </div>
// // // //         </CardContent>
// // // //       </Card>
// // // //     </div>
// // // //   );
// // // // }




// // // "use client";
// // // import { useState, useEffect } from 'react';
// // // import { useSession } from 'next-auth/react';
// // // import { fetchMilkProduction, addMilkProduction } from '../../../lib/services/farmerService';
// // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Button } from '@/components/ui/button';
// // // import { Input } from '@/components/ui/input';
// // // import { Plus, Loader2 } from 'lucide-react';
// // // import axios from 'axios';

// // // export default function FarmerDashboard() {
// // //   interface MilkRecord {
// // //     date: string;
// // //     session: string;
// // //     quantity: number;
// // //   }

// // //   const { data: session } = useSession();
// // //   const [farmerId, setFarmerId] = useState<string | null>(null);
// // //   const [milkProduction, setMilkProduction] = useState<MilkRecord[]>([]);
// // //   const [quantity, setQuantity] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const sessionTime = new Date().getHours() < 12 ? 'morning' : 'evening';

// // //   // Fetch the farmer ID from the backend
// // //   // useEffect(() => {
// // //   //   const getFarmerId = async () => {
// // //   //     if (!session?.user?.email) return;
      
// // //   //     try {
// // //   //       const response = await axios.get(`/api/farmer/email/${session.user.email}`);
// // //   //       console.log("Fetched Farmer ID:", response.data.farmerId); // Debugging
// // //   //       setFarmerId(response.data.farmerId);
// // //   //     } catch (error) {
// // //   //       console.error("Error fetching Farmer ID:", error);
// // //   //     }
// // //   //   };

// // //   //   getFarmerId();
// // //   // }, [session]);

// // //   // // Fetch Milk Production Data when farmerId is available
// // //   // useEffect(() => {
// // //   //   if (!farmerId) return;

// // //   //   const getData = async () => {
// // //   //     try {
// // //   //       console.log("Fetching milk production for Farmer ID:", farmerId); // Debugging
// // //   //       const data = await fetchMilkProduction(farmerId);
// // //   //       setMilkProduction(data || []);
// // //   //     } catch (error) {
// // //   //       console.error("Error fetching milk production:", error);
// // //   //     }
// // //   //   };
    
// // //   //   getData();
// // //   // }, [farmerId]);
// // //   useEffect(() => {
// // //     setFarmerId("65d91bf5a034cd001f8925ae"); // 🔥 Hardcoded for debugging
// // // }, []);

// // //   // const handleAddProduction = async () => {
// // //   //   if (!quantity || !farmerId) {
// // //   //     console.error("Farmer ID:", farmerId, "Quantity:", quantity);
// // //   //     alert("Farmer ID is missing or quantity is empty!");
// // //   //     return;
// // //   //   }
  
// // //   //   try {
// // //   //     setLoading(true);
// // //   //     console.log("Adding production for Farmer ID:",{ farmerId, quantity: Number(quantity)});
  
// // //   //     const response = await fetch("/api/farmers/milk-production", {
// // //   //       method: "POST",
// // //   //       headers: { "Content-Type": "application/json" },
// // //   //       body: JSON.stringify({ farmerId, quantity: Number(quantity) }), // Convert to number
// // //   //     });
      
// // //   //     const data = await response.json();
// // //   //     console.log("Response:", data);
  
// // //   //     if (!data.success) {
// // //   //       alert(data.message || "Failed to update production");
// // //   //     } else {
// // //   //       setMilkProduction((prev) => [...prev, { date: new Date().toISOString().split('T')[0], session: sessionTime, quantity: Number(quantity) }]);
// // //   //       setQuantity("");
// // //   //     }
// // //   //   } catch (error) {
// // //   //     console.error("Error:", error);
// // //   //   } finally {
// // //   //     setLoading(false);
// // //   //   }
// // //   // };
// // //   const handleAddProduction = async () => {
// // //     console.log("🚀 FUNCTION CALLED: handleAddProduction");
// // //     console.log("📝 Data Sent →", { farmerId, quantity });

// // //     try {
// // //         const response = await fetch("/api/farmers/milk-production", {
// // //             method: "POST",
// // //             headers: { "Content-Type": "application/json" },
// // //             body: JSON.stringify({ farmerId, quantity }),
// // //         });

// // //         console.log("📡 RESPONSE RECEIVED");
// // //         const data = await response.json();
// // //         console.log("📬 API Response →", data);

// // //         if (data.success) {
// // //             console.log("✅ Success:", data.message);
// // //         } else {
// // //             console.log("❌ Failed:", data.message);
// // //         }
// // //     } catch (error) {
// // //         console.log("🔥 ERROR: Request Failed!", error);
// // //     }
// // // };

// // //   return (
// // //     <div className="p-6 max-w-4xl mx-auto">
// // //       <Card className="mb-6">
// // //         <CardHeader>
// // //           <CardTitle className="text-2xl">Milk Production</CardTitle>
// // //         </CardHeader>
// // //         <CardContent>
// // //           <div className="flex flex-col space-y-4">
// // //             {milkProduction.length > 0 ? (
// // //               milkProduction.map((record, index) => (
// // //                 <div key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
// // //                   <span className="text-lg font-medium">{record.date} ({record.session})</span>
// // //                   <span className="text-lg font-semibold">{record.quantity} L</span>
// // //                 </div>
// // //               ))
// // //             ) : (
// // //               <p className="text-gray-500">No records available</p>
// // //             )}
// // //           </div>
// // //         </CardContent>
// // //       </Card>
// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle className="text-xl">Add Production</CardTitle>
// // //         </CardHeader>
// // //         <CardContent>
// // //           <div className="flex gap-4 items-center">
// // //             <Input type="number" placeholder="Enter quantity (L)" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
// // //             <Button onClick={handleAddProduction} disabled={loading}>
// // //               {loading ? <Loader2 className="animate-spin" /> : <Plus />}
// // //               Add
// // //             </Button>
// // //           </div>
// // //         </CardContent>
// // //       </Card>
// // //     </div>
// // //   );
// // // }




// // // Frontend/app/dashboard/farmer/page.tsx
// // // 'use client';

// // // import { useState } from 'react';

// // // export default function FarmerDashboard() {
// // //   const [quantity, setQuantity] = useState('');
// // //   const [error, setError] = useState(null);
// // //   const [success, setSuccess] = useState(null);

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await fetch('/api/farmer/milk-production', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ quantity, farmerId: '67b990a5908afb861df092ad' }), // Replace with actual farmer ID from auth
// // //       });

// // //       if (!response.ok) throw new Error('Failed to update milk production');
// // //       const data = await response.json();
// // //       setSuccess('Milk production updated successfully!');
// // //       setQuantity(''); // Reset form
// // //     } catch (err) {
// // //       setError(err.message);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Farmer Dashboard</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <input
// // //           type="number"
// // //           value={quantity}
// // //           onChange={(e) => setQuantity(e.target.value)}
// // //           placeholder="Enter milk quantity (liters)"
// // //         />
// // //         <button type="submit">Update Milk Production</button>
// // //       </form>
// // //       {error && <p style={{ color: 'red' }}>{error}</p>}
// // //       {success && <p style={{ color: 'green' }}>{success}</p>}
// // //       {/* Add history/transaction display here */}
// // //     </div>
// // //   );
// // // }




// // 'use client';

// // import { useState } from 'react';
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { AlertCircle, CheckCircle } from 'lucide-react';

// // export default function FarmerDashboard() {
// //   const [quantity, setQuantity] = useState('');
// //   const [error, setError] = useState<string | null>(null);
// //   const [success, setSuccess] = useState<string | null>(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!quantity || parseFloat(quantity) <= 0) {
// //       setError('Please enter a valid milk quantity.');
// //       setSuccess(null);
// //       return;
// //     }
    
// //     setLoading(true);
// //     try {
// //       const response = await fetch('/api/farmer/milk-production', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ quantity, farmerId: '67b990a5908afb861df092ad' }),
// //       });
      
// //       if (!response.ok) throw new Error('Failed to update milk production');
// //       const data = await response.json();
// //       setSuccess('Milk production updated successfully!');
// //       setError(null);
// //       setQuantity('');
// //     } catch (err: any) {
// //       setError(err.message);
// //       setSuccess(null);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
// //       <Card className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg">
// //         <h1 className="text-2xl font-semibold text-center mb-4">Farmer Dashboard</h1>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <Input
// //             type="number"
// //             value={quantity}
// //             onChange={(e) => setQuantity(e.target.value)}
// //             placeholder="Enter milk quantity (liters)"
// //             className="w-full"
// //           />
// //           <Button type="submit" className="w-full" disabled={loading}>
// //             {loading ? 'Updating...' : 'Update Milk Production'}
// //           </Button>
// //         </form>
// //         {error && (
// //           <div className="flex items-center text-red-600 mt-3">
// //             <AlertCircle className="mr-2" /> {error}
// //           </div>
// //         )}
// //         {success && (
// //           <div className="flex items-center text-green-600 mt-3">
// //             <CheckCircle className="mr-2" /> {success}
// //           </div>
// //         )}
// //       </Card>
// //     </div>
// //   );
// // }


// // 'use client';

// // import { useState } from 'react';
// // import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

// // export default function FarmerDashboard() {
// //   const [quantity, setQuantity] = useState('');
// //   const [error, setError] = useState(null);
// //   const [success, setSuccess] = useState(null);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch('/api/farmer/milk-production', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ quantity, farmerId: '67b990a5908afb861df092ad' }),
// //       });

// //       if (!response.ok) throw new Error('Failed to update milk production');
// //       const data = await response.json();
// //       setSuccess('Milk production updated successfully!');
// //       setQuantity('');
// //       setError(null);
// //     } catch (err) {
// //       setError(err.message);
// //       setSuccess(null);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
// //       <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
// //         <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">Farmer Dashboard</h1>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="number"
// //             value={quantity}
// //             onChange={(e) => setQuantity(e.target.value)}
// //             placeholder="Enter milk quantity (liters)"
// //             className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
// //           />
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
// //           >
// //             Update Milk Production
// //           </button>
// //         </form>

// //         {error && (
// //           <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-100 p-3 rounded-md border border-red-300">
// //             <ExclamationCircleIcon className="w-5 h-5 text-red-600" />
// //             <span>{error}</span>
// //           </div>
// //         )}

// //         {success && (
// //           <div className="mt-4 flex items-center gap-2 text-green-600 bg-green-100 p-3 rounded-md border border-green-300">
// //             <CheckCircleIcon className="w-5 h-5 text-green-600" />
// //             <span>{success}</span>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// "use client";
// // import { useState } from "react";

// // export default function FarmerDashboard() {
// //   const [milkProduction, setMilkProduction] = useState([
// //     { date: "2025-02-20", shift: "Morning", quantity: 10, status: "Confirmed" },
// //     { date: "2025-02-20", shift: "Evening", quantity: 12, status: "Pending" },
// //   ]);

// //   const [date, setDate] = useState("");
// //   const [shift, setShift] = useState("Morning");
// //   const [quantity, setQuantity] = useState("");

// //   const totalProduced = milkProduction.reduce((sum, entry) => sum + entry.quantity, 0);
// //   const pendingDeliveries = milkProduction.filter((entry) => entry.status === "Pending").length;
// //   const confirmedDeliveries = milkProduction.filter((entry) => entry.status === "Confirmed").length;

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!date || !quantity) return;
// //     setMilkProduction([...milkProduction, { date, shift, quantity: Number(quantity), status: "Pending" }]);
// //     setDate("");
// //     setQuantity("");
// //   };

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
// //       <h2 className="text-2xl font-bold mb-4">Farmer Dashboard</h2>
// //       <div className="grid grid-cols-3 gap-4 mb-6">
// //         <div className="bg-blue-100 p-4 rounded-lg text-center">
// //           <p className="text-lg font-semibold">Total Milk Produced</p>
// //           <p className="text-2xl font-bold">{totalProduced} L</p>
// //         </div>
// //         <div className="bg-yellow-100 p-4 rounded-lg text-center">
// //           <p className="text-lg font-semibold">Pending Deliveries</p>
// //           <p className="text-2xl font-bold">{pendingDeliveries}</p>
// //         </div>
// //         <div className="bg-green-100 p-4 rounded-lg text-center">
// //           <p className="text-lg font-semibold">Confirmed Deliveries</p>
// //           <p className="text-2xl font-bold">{confirmedDeliveries}</p>
// //         </div>
// //       </div>

// //       <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-100 rounded-lg">
// //         <h3 className="text-lg font-semibold mb-2">Add Milk Production Entry</h3>
// //         <div className="grid grid-cols-3 gap-4">
// //           <input type="date" className="p-2 border rounded" value={date} onChange={(e) => setDate(e.target.value)} required />
// //           <select className="p-2 border rounded" value={shift} onChange={(e) => setShift(e.target.value)}>
// //             <option value="Morning">Morning</option>
// //             <option value="Evening">Evening</option>
// //           </select>
// //           <input type="number" className="p-2 border rounded" placeholder="Quantity (L)" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
// //         </div>
// //         <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
// //       </form>

// //       <h3 className="text-lg font-semibold mb-2">Production History</h3>
// //       <table className="w-full border-collapse border border-gray-300">
// //         <thead>
// //           <tr className="bg-gray-200">
// //             <th className="border p-2">Date</th>
// //             <th className="border p-2">Shift</th>
// //             <th className="border p-2">Quantity (L)</th>
// //             <th className="border p-2">Status</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {milkProduction.map((entry, index) => (
// //             <tr key={index} className="text-center border-b">
// //               <td className="border p-2">{entry.date}</td>
// //               <td className="border p-2">{entry.shift}</td>
// //               <td className="border p-2">{entry.quantity} L</td>
// //               <td className={`border p-2 ${entry.status === "Confirmed" ? "text-green-600" : "text-yellow-600"}`}>{entry.status}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }
// "use client";

// import React, { useState, useEffect } from 'react';
// import { Mountain, Milk, Calendar, ShoppingCart, Clock, Check, X, Package } from 'lucide-react';

// interface MilkProduction {
//   id: string;
//   date: string;
//   quantity: number;
//   status: 'pending' | 'confirmed' | 'cancelled';
//   deliveryTime: '06:00-08:00' | '16:00-18:00';
// }

// function FarmerDashboard() {
//   const [quantity, setQuantity] = useState<string>('');
//   const [selectedDate, setSelectedDate] = useState<string>('');
//   const [selectedTime, setSelectedTime] = useState<'06:00-08:00' | '16:00-18:00'>('06:00-08:00');
//   const [productions, setProductions] = useState<MilkProduction[]>([
//     { id: '1', date: '2024-03-15', quantity: 2, status: 'confirmed', deliveryTime: '06:00-08:00' },
//     { id: '2', date: '2024-03-16', quantity: 3, status: 'pending', deliveryTime: '16:00-18:00' },
//     { id: '3', date: '2024-03-17', quantity: 1.5, status: 'cancelled', deliveryTime: '06:00-08:00' },
//   ]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!quantity || !selectedDate) return;

//     const newProduction: MilkProduction = {
//       id: Date.now().toString(),
//       date: selectedDate,
//       quantity: parseFloat(quantity),
//       status: 'pending',
//       deliveryTime: selectedTime
//     };

//     setProductions([newProduction, ...productions]);
//     setQuantity('');
//     setSelectedDate('');
//   };

//   const updateProductionStatus = (productionId: string, status: 'confirmed' | 'cancelled') => {
//     setProductions(productions.map(production => 
//       production.id === productionId ? { ...production, status } : production
//     ));
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'confirmed': return 'text-green-600 bg-green-50';
//       case 'cancelled': return 'text-red-600 bg-red-50';
//       default: return 'text-yellow-600 bg-yellow-50';
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'confirmed': return <Check className="h-4 w-4" />;
//       case 'cancelled': return <X className="h-4 w-4" />;
//       default: return <Clock className="h-4 w-4" />;
//     }
//   };

//   // Calculate total pending productions
//   const pendingProductions = productions.filter(production => production.status === 'pending').length;
//   // Calculate total confirmed productions
//   const confirmedProductions = productions.filter(production => production.status === 'confirmed').length;
//   // Calculate total quantity produced
//   const totalQuantity = productions.reduce((sum, production) => 
//     production.status !== 'cancelled' ? sum + production.quantity : sum, 0);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
//       {/* Header */}
//       <header className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <Mountain className="h-8 w-8 text-green-600" />
//             <h1 className="text-2xl font-bold text-gray-900">Green Pastures Dairy</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <span className="text-sm text-gray-500">Farmer Dashboard</span>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Pending Productions</p>
//                 <p className="text-2xl font-bold text-gray-900">{pendingProductions}</p>
//               </div>
//               <div className="bg-yellow-100 p-3 rounded-full">
//                 <Clock className="h-6 w-6 text-yellow-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Confirmed Productions</p>
//                 <p className="text-2xl font-bold text-gray-900">{confirmedProductions}</p>
//               </div>
//               <div className="bg-green-100 p-3 rounded-full">
//                 <Check className="h-6 w-6 text-green-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Quantity</p>
//                 <p className="text-2xl font-bold text-gray-900">{totalQuantity.toFixed(1)} L</p>
//               </div>
//               <div className="bg-blue-100 p-3 rounded-full">
//                 <Milk className="h-6 w-6 text-blue-600" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Add New Production */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Production</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
//                   Production Date
//                 </label>
//                 <input
//                   type="date"
//                   id="date"
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   min={new Date().toISOString().split('T')[0]}
//                   className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
//                   Delivery Time
//                 </label>
//                 <select
//                   id="time"
//                   value={selectedTime}
//                   onChange={(e) => setSelectedTime(e.target.value as '06:00-08:00' | '16:00-18:00')}
//                   className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 >
//                   <option value="06:00-08:00">Morning (6:00 - 8:00)</option>
//                   <option value="16:00-18:00">Evening (16:00 - 18:00)</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
//                   Quantity (Liters)
//                 </label>
//                 <input
//                   type="number"
//                   id="quantity"
//                   step="0.5"
//                   min="0.5"
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                   placeholder="Enter quantity"
//                   className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               Add Production
//             </button>
//           </form>
//         </div>

//         {/* Productions Table */}
//         <div className="bg-white rounded-xl shadow-md border border-gray-100">
//           <div className="p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">My Productions</h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity (L)</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {productions.map((production) => (
//                   <tr key={production.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{production.date}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{production.deliveryTime}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{production.quantity.toFixed(1)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(production.status)}`}>
//                         {getStatusIcon(production.status)}
//                         <span className="ml-1 capitalize">{production.status}</span>
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       {production.status === 'pending' && (
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => updateProductionStatus(production.id, 'confirmed')}
//                             className="text-green-600 hover:text-green-800"
//                           >
//                             <Check className="h-5 w-5" />
//                           </button>
//                           <button
//                             onClick={() => updateProductionStatus(production.id, 'cancelled')}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             <X className="h-5 w-5" />
//                           </button>
//                         </div>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default FarmerDashboard;
"use client";

import React, { useState, useEffect } from 'react';
import { Mountain, Milk, Calendar, ShoppingCart, Clock, Check, X, Package } from 'lucide-react';
import {
  addMilkProduction,
  getMilkProductions,
  updateMilkProductionStatus,
} from '@/lib/services/farmerService'; // Adjust the import path as needed

interface MilkProduction {
  id: string;
  date: string;
  quantity: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  deliveryTime: '06:00-08:00' | '16:00-18:00';
}

function FarmerDashboard() {
  const [quantity, setQuantity] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<'06:00-08:00' | '16:00-18:00'>('06:00-08:00');
  const [productions, setProductions] = useState<MilkProduction[]>([]);
  const farmerId = 'your-farmer-id'; // Replace with the actual farmer ID from your authentication system

  // Fetch productions on component mount
  useEffect(() => {
    const fetchProductions = async () => {
      try {
        const data = await getMilkProductions(farmerId);
        setProductions(data);
      } catch (error) {
        console.error('Error fetching productions:', error);
      }
    };
    fetchProductions();
  }, [farmerId]);

  // Handle form submission to add a new production
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quantity || !selectedDate) return;
  
    try {
      const newProduction = await addMilkProduction({
        date: selectedDate,
        quantity: parseFloat(quantity),
        deliveryTime: selectedTime,
        farmer: farmerId, // Ensure farmerId is correctly defined
      });
      setProductions([newProduction, ...productions]);
      setQuantity('');
      setSelectedDate('');
    } catch (error) {
      console.error('Error adding production:', error);
    }
  };

  // Update production status
  const updateProductionStatus = async (productionId: string, status: 'confirmed' | 'cancelled') => {
    try {
      const updatedProduction = await updateMilkProductionStatus(productionId, status);
      setProductions(productions.map(production =>
        production.id === productionId ? updatedProduction : production
      ));
    } catch (error) {
      console.error('Error updating production status:', error);
    }
  };

  // Calculate total pending productions
  const pendingProductions = productions.filter(production => production.status === 'pending').length;
  // Calculate total confirmed productions
  const confirmedProductions = productions.filter(production => production.status === 'confirmed').length;
  // Calculate total quantity produced
  const totalQuantity = productions.reduce((sum, production) => 
    production.status !== 'cancelled' ? sum + production.quantity : sum, 0);

  // Get status color for styling
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-50';
      case 'cancelled': return 'text-red-600 bg-red-50';
      default: return 'text-yellow-600 bg-yellow-50';
    }
  };

  // Get status icon for display
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <Check className="h-4 w-4" />;
      case 'cancelled': return <X className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Mountain className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Farmer Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Farmer Dashboard</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Productions</p>
                <p className="text-2xl font-bold text-gray-900">{pendingProductions}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Confirmed Productions</p>
                <p className="text-2xl font-bold text-gray-900">{confirmedProductions}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Check className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Quantity</p>
                <p className="text-2xl font-bold text-gray-900">{totalQuantity.toFixed(1)} L</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Milk className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Add New Production */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Production</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Production Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Time
                </label>
                <select
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value as '06:00-08:00' | '16:00-18:00')}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="06:00-08:00">Morning (6:00 - 8:00)</option>
                  <option value="16:00-18:00">Evening (16:00 - 18:00)</option>
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity (Liters)
                </label>
                <input
                  type="number"
                  id="quantity"
                  step="0.5"
                  min="0.5"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Add Production
            </button>
          </form>
        </div>

        {/* Productions Table */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">My Productions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity (L)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {productions.map((production) => (
                  <tr key={production.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{production.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{production.deliveryTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{production.quantity.toFixed(1)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(production.status)}`}>
                        {getStatusIcon(production.status)}
                        <span className="ml-1 capitalize">{production.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {production.status === 'pending' && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateProductionStatus(production.id, 'confirmed')}
                            className="text-green-600 hover:text-green-800"
                          >
                            <Check className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => updateProductionStatus(production.id, 'cancelled')}
                            className="text-red-600 hover:text-red-800"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FarmerDashboard;