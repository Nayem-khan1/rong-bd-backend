import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import products from "./data/products.js";
import users from "./data/users.js";

import productModel from "./models/productModel.js";
import userModel from "./models/userModel.js";
import orderModel from "./models/orderModel.js";

dotenv.config();
await connectDB();

const seedDatabase = async () => {
  try {
    // Clear existing data
    await productModel.deleteMany();
    await userModel.deleteMany();
    await orderModel.deleteMany();

    // Insert users and products
    const createdUsers = await userModel.insertMany(users);
    const createdProducts = await productModel.insertMany(products);

    // Dynamically create one order for each product
    const sampleOrders = createdProducts.map((product, index) => ({
      userId: createdUsers[index % createdUsers.length]._id,
      items: [
        {
          _id: product._id,
          name: product.name,
          description: product.description,
          price: product.price,
          image: [product.image[0]],
          category: product.category,
          subCategory: product.subCategory,
          quantity: 1,
          amount: product.price + 10,
          size: "M",
        },
      ],
      amount: product.price + 10,
      address: {
        firstName: "Seed",
        lastName: "Customer",
        email: "customer@example.com",
        street: "Dhaka, Bangladesh",
        city: "Dhaka",
        state: "Dhaka",
        zipcode: "1216",
        country: "Bangladesh",
        phone: "01954496221",
      },
      status: "Delivered",
      paymentMethod: "Stripe",
      payment: 1,
      date: Date.now(),
    }));

    await orderModel.insertMany(sampleOrders);

    console.log("✅ Database seeded with users, products, and generated orders.");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();
