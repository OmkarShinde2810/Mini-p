import React, { useState, useEffect } from "react";

function Porder() {
  // Sample data for demonstration
  const [orders, setOrders] = useState([
    {
      orderId: "ORD001",
      customerName: "John Doe",
      serviceType: "Home Cleaning",
      serviceDescription: "Deep cleaning for a 3-bedroom house.",
      orderDate: "2024-11-15",
      timeSlot: "10:00 AM - 12:00 PM",
      cost: "$100",
      status: "Pending",
    },
    {
      orderId: "ORD002",
      customerName: "Jane Smith",
      serviceType: "Plumbing",
      serviceDescription: "Fixing a leaking pipe in the kitchen.",
      orderDate: "2024-11-16",
      timeSlot: "2:00 PM - 4:00 PM",
      cost: "$75",
      status: "Completed",
    },
    {
      orderId: "ORD003",
      customerName: "Alice Brown",
      serviceType: "Personal Training",
      serviceDescription: "1-hour fitness session.",
      orderDate: "2024-11-17",
      timeSlot: "6:00 PM - 7:00 PM",
      cost: "$50",
      status: "In Progress",
    },
  ]);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <h1 className="text-3xl font-bold mb-6">Orders Received</h1>
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Service Type</th>
                <th>Description</th>
                <th>Order Date</th>
                <th>Time Slot</th>
                <th>Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.orderId}</td>
                    <td>{order.customerName}</td>
                    <td>{order.serviceType}</td>
                    <td>{order.serviceDescription}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.timeSlot}</td>
                    <td>{order.cost}</td>
                    <td>
                      <span
                        className={`badge ${
                          order.status === "Pending"
                            ? "badge-warning"
                            : order.status === "Completed"
                            ? "badge-success"
                            : "badge-info"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Porder;
