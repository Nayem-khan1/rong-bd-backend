import userModel from "../models/userModel.js";

// Helper: Get date in YYYY-MM-DD format
const getDateString = (timestamp) => {
  const date = new Date(timestamp);
  return date.toISOString().split("T")[0];
};

export const getUserAnalytics = async (req, res) => {
  try {
    const users = await userModel.find().select("role createdAt");

    // 1. Total Users Count
    const totalUsers = users.length;

    // 2. Admin vs User Count
    const roleCount = { admin: 0, user: 0 };
    users.forEach(user => {
      roleCount[user.role] = (roleCount[user.role] || 0) + 1;
    });

    // 3. New Users Per Day (Line Chart)
    const newUsersPerDay = {};
    users.forEach(user => {
      const key = getDateString(user._id.getTimestamp());
      newUsersPerDay[key] = (newUsersPerDay[key] || 0) + 1;
    });

    // 4. Recently Registered Users (Last 7 or 30 days)
    const now = Date.now();
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

    const usersLast7Days = users.filter(user => user._id.getTimestamp() >= sevenDaysAgo);
    const usersLast30Days = users.filter(user => user._id.getTimestamp() >= thirtyDaysAgo);

    res.json({
      success: true,
      data: {
        totalUsers,
        roleCount,
        newUsersPerDay,
        recentUsers: {
          last7Days: usersLast7Days.length,
          last30Days: usersLast30Days.length
        }
      }
    });

  } catch (error) {
    console.error("User Analytics Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch user analytics", error: error.message });
  }
};
