import orderModel from "../models/orderModel.js";


// Helper to convert timestamp to YYYY-MM-DD
const getDateKey = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const getOrderAnalytics = async (req, res) => {
  try {
    // 1. Total Orders
    const totalOrders = await orderModel.countDocuments();

    // 2. Orders by Status (Pie Chart)
    const ordersByStatus = await orderModel.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);

    // 3. Orders Per Day (Last 30 Days) — Line Chart
    const last30Days = Date.now() - 30 * 24 * 60 * 60 * 1000;
    const recentOrders = await orderModel.find({ date: { $gte: last30Days } });

    const ordersPerDay = {};
    for (const order of recentOrders) {
      const key = getDateKey(order.date);
      ordersPerDay[key] = (ordersPerDay[key] || 0) + 1;
    }

    // 4. Total Revenue (Delivered Orders)
    const revenueData = await orderModel.aggregate([
      { $match: { status: "Delivered" } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    const totalRevenue = revenueData[0]?.total || 0;

    // 5. Revenue by Payment Method
    const revenueByPayment = await orderModel.aggregate([
      { $match: { status: "Delivered" } },
      { $group: { _id: "$paymentMethod", total: { $sum: "$amount" } } }
    ]);

    // 6. Monthly Revenue (for charting)
    const monthlyRevenue = await orderModel.aggregate([
      { $match: { status: "Delivered" } },
      {
        $group: {
          _id: {
            year: { $year: { $toDate: "$date" } },
            month: { $month: { $toDate: "$date" } }
          },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);

    // 7. Recent Orders (last 10)
    const recent = await orderModel.find().sort({ date: -1 }).limit(5);

    res.json({
      success: true,
      data: {
        totalOrders,
        ordersByStatus,
        ordersPerDay,
        totalRevenue,
        revenueByPayment,
        monthlyRevenue,
        recentOrders: recent
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Analytics fetch failed", error: error.message });
  }
};
