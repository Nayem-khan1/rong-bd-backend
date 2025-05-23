import orderModel from "../models/orderModel.js";

// Helper: Get Month-Year label
const getMonthYear = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
};

export const getRevenueAnalytics = async (req, res) => {
  try {
    // Filter only Delivered Orders (revenue-generating)
    const deliveredOrders = await orderModel.find({ status: "Delivered" });

    // 1. Total Revenue
    const totalRevenue = deliveredOrders.reduce((sum, order) => sum + order.amount, 0);

    // 2. Revenue by Payment Method (Pie Chart)
    const revenueByPaymentMethod = {};
    deliveredOrders.forEach(order => {
      const method = order.paymentMethod || "Unknown";
      revenueByPaymentMethod[method] = (revenueByPaymentMethod[method] || 0) + order.amount;
    });

    // 3. Monthly Revenue Trend (Line Chart)
    const monthlyRevenue = {};
    deliveredOrders.forEach(order => {
      const key = getMonthYear(order.date);
      monthlyRevenue[key] = (monthlyRevenue[key] || 0) + order.amount;
    });

    res.json({
      success: true,
      data: {
        totalRevenue,
        revenueByPaymentMethod,
        monthlyRevenue
      }
    });

  } catch (error) {
    console.error("Revenue Analytics Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch revenue analytics", error: error.message });
  }
};
