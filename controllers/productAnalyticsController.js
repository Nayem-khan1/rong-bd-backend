import productModel from "../models/productModel.js";

// Helper: Get date N days ago
const getDateNDaysAgo = (n) => new Date(Date.now() - n * 24 * 60 * 60 * 1000);

export const getProductAnalytics = async (req, res) => {
  try {
    const products = await productModel.find();

    // 1. Total Products Count
    const totalProducts = products.length;

    // 2. Best Sellers Count
    const bestSellersCount = products.filter(p => p.bestSeller).length;

    // 3. Products Count by Category & SubCategory
    const categoryCount = {};
    const subCategoryCount = {};
    products.forEach(p => {
      categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
      subCategoryCount[p.subCategory] = (subCategoryCount[p.subCategory] || 0) + 1;
    });

    // 4. Recently Added Products (Last 7 & 30 Days)
    const last7Days = getDateNDaysAgo(7).getTime();
    const last30Days = getDateNDaysAgo(30).getTime();

    const recentProducts7 = products.filter(p => p.date >= last7Days).length;
    const recentProducts30 = products.filter(p => p.date >= last30Days).length;

    // 5. Low Stock Products (Optional — if "stock" field exists in schema)
    let lowStockProducts = [];
    if (products[0]?.stock !== undefined) {
      lowStockProducts = products.filter(p => p.stock < 5); // you can adjust threshold
    }

    res.json({
      success: true,
      data: {
        totalProducts,
        bestSellersCount,
        categoryCount,
        subCategoryCount,
        recentlyAdded: {
          last7Days: recentProducts7,
          last30Days: recentProducts30,
        },
        lowStockProducts: lowStockProducts.length ? lowStockProducts : "Stock info not available"
      }
    });
  } catch (error) {
    console.error("Product Analytics Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch product analytics", error: error.message });
  }
};
