import express from "express";
import adminAuth from '../middleware/adminAuth.js';
import { getOrderAnalytics } from "../controllers/orderAnalyticsController.js";
import { getRevenueAnalytics } from "../controllers/revenueAnalyticsController.js";
import { getUserAnalytics } from "../controllers/userAnalyticsController.js";
import { getProductAnalytics } from "../controllers/productAnalyticsController.js";
import { getTopPerformers } from "../controllers/topPerformersController.js";


const analyticsRouter = express.Router();

analyticsRouter.get("/order", adminAuth, getOrderAnalytics)
analyticsRouter.get("/revenue", adminAuth, getRevenueAnalytics)
analyticsRouter.get("/users", adminAuth, getUserAnalytics)
analyticsRouter.get("/products", adminAuth, getProductAnalytics)
analyticsRouter.get("/top-performers", adminAuth, getTopPerformers)


export default analyticsRouter;