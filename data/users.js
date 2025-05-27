import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    role: "admin",
    cartData: {},
  },
  {
    name: "Customer",
    email: "customer@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    role: "user",
    cartData: {},
  },
  {
    name: "Michael Brown",
    email: "mike.brown22@example.com",
    password: bcrypt.hashSync("12345678", 10),
    role: "user",
    cartData: {},
  },
  {
    name: "David Thompson",
    email: "david.thompson44@example.com",
    password: bcrypt.hashSync("12345678", 10),
    role: "user",
    cartData: {},
  },
  {
    name: "Sarah Williams",
    email: "sarah.williams91@example.com",
    password: bcrypt.hashSync("12345678", 10),
    role: "user",
    cartData: {},
  },
  {
    name: "John Carter",
    email: "john.carter23@example.com",
    password: bcrypt.hashSync("12345678", 10),
    role: "user",
    cartData: {},
  },
];

export default users;
