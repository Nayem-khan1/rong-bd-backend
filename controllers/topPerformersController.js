import orderModel from "../models/orderModel.js";
import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";

export const getTopPerformers = async (req, res) => {
  try {
    const orders = await orderModel.find();
    const users = await userModel.find();
    const products = await productModel.find();

    // === 1. Top Selling Products ===
    const productSalesMap = {}; // { productName: count }

    orders.forEach(order => {
      order.items.forEach(item => {
        const key = item.name; // Assuming item contains name, quantity etc.
        productSalesMap[key] = (productSalesMap[key] || 0) + item.quantity;
      });
    });

    const topSellingProducts = Object.entries(productSalesMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, sold]) => ({ name, sold }));

    // === 2. Top Customers (by Total Revenue) ===
    const revenueMap = {}; // { userId: totalRevenue }
    const orderCountMap = {}; // { userId: orderCount }

    orders.forEach(order => {
      const { userId, amount } = order;
      revenueMap[userId] = (revenueMap[userId] || 0) + amount;
      orderCountMap[userId] = (orderCountMap[userId] || 0) + 1;
    });

    const topCustomersByRevenue = Object.entries(revenueMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([userId, totalSpent]) => {
        const user = users.find(u => u._id.toString() === userId);
        return {
          name: user?.name || "Unknown",
          email: user?.email || "N/A",
          totalSpent,
          totalOrders: orderCountMap[userId]
        };
      });

    res.json({
      success: true,
      data: {
        topSellingProducts,
        topCustomersByRevenue
      }
    });
  } catch (error) {
    console.error("Top Performers Error:", error);
    res.status(500).json({ success: false, message: "Failed to get top performers", error: error.message });
  }
};
