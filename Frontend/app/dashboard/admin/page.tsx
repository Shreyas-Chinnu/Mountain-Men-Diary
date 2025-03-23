"use client";

import React, { useState } from 'react';
import { Mountain, Milk, Users, TrendingUp, Package, Clock, Check, X, Droplets, CalendarClock } from 'lucide-react';

interface MilkProduction {
  id: string;
  date: string;
  quantity: number;
  shift: 'morning' | 'evening';
  quality: 'excellent' | 'good' | 'fair';
  temperature: number;
}

interface CustomerOrder {
  id: string;
  customerId: string;
  customerName: string;
  date: string;
  quantity: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  deliveryTime: '06:00-08:00' | '16:00-18:00';
}

function App() {
  const [productions, setProductions] = useState<MilkProduction[]>([
    { id: '1', date: '2024-03-15', quantity: 250, shift: 'morning', quality: 'excellent', temperature: 4.2 },
    { id: '2', date: '2024-03-15', quantity: 200, shift: 'evening', quality: 'good', temperature: 4.1 },
    { id: '3', date: '2024-03-16', quantity: 245, shift: 'morning', quality: 'excellent', temperature: 4.0 },
  ]);

  const [orders, setOrders] = useState<CustomerOrder[]>([
    { id: '1', customerId: 'C1', customerName: 'John Doe', date: '2024-03-15', quantity: 2, status: 'confirmed', deliveryTime: '06:00-08:00' },
    { id: '2', customerId: 'C2', customerName: 'Jane Smith', date: '2024-03-16', quantity: 3, status: 'pending', deliveryTime: '16:00-18:00' },
    { id: '3', customerId: 'C3', customerName: 'Mike Johnson', date: '2024-03-17', quantity: 1.5, status: 'pending', deliveryTime: '06:00-08:00' },
  ]);

  const updateOrderStatus = (orderId: string, status: 'confirmed' | 'cancelled') => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
  };

  // Calculate statistics
  const totalProduction = productions.reduce((sum, prod) => sum + prod.quantity, 0);
  const pendingOrders = orders.filter(order => order.status === 'pending').length;
  const totalOrderedQuantity = orders.reduce((sum, order) => 
    order.status !== 'cancelled' ? sum + order.quantity : sum, 0);
  const activeCustomers = new Set(orders.filter(order => order.status !== 'cancelled').map(order => order.customerId)).size;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-50';
      case 'cancelled': return 'text-red-600 bg-red-50';
      default: return 'text-yellow-600 bg-yellow-50';
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'text-green-600 bg-green-50';
      case 'good': return 'text-blue-600 bg-blue-50';
      default: return 'text-yellow-600 bg-yellow-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Mountain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Mountain Men Diary</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-blue-600">Admin Dashboard</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Production</p>
                <p className="text-2xl font-bold text-gray-900">{totalProduction.toFixed(1)}L</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Milk className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                <p className="text-2xl font-bold text-gray-900">{pendingOrders}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Ordered</p>
                <p className="text-2xl font-bold text-gray-900">{totalOrderedQuantity.toFixed(1)}L</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Customers</p>
                <p className="text-2xl font-bold text-gray-900">{activeCustomers}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Production Overview */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Production Overview</h2>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Daily Production Log</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shift</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity (L)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperature (°C)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {productions.map((production) => (
                  <tr key={production.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{production.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{production.shift}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{production.quantity.toFixed(1)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getQualityColor(production.quality)}`}>
                        <Droplets className="h-4 w-4 mr-1" />
                        {production.quality}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{production.temperature.toFixed(1)}°C</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Orders */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Customer Orders</h2>
            <div className="flex items-center space-x-2">
              <CalendarClock className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Order Management</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity (L)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">
                            {order.customerName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                          <div className="text-sm text-gray-500">ID: {order.customerId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.deliveryTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.quantity.toFixed(1)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status === 'confirmed' ? <Check className="h-4 w-4 mr-1" /> : 
                         order.status === 'cancelled' ? <X className="h-4 w-4 mr-1" /> : 
                         <Clock className="h-4 w-4 mr-1" />}
                        <span className="capitalize">{order.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {order.status === 'pending' && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateOrderStatus(order.id, 'confirmed')}
                            className="text-green-600 hover:text-green-800"
                            title="Confirm Order"
                          >
                            <Check className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => updateOrderStatus(order.id, 'cancelled')}
                            className="text-red-600 hover:text-red-800"
                            title="Cancel Order"
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

export default App;