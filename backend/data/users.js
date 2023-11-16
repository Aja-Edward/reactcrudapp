import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ivan Edward",
    email: "ivanedward@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Vincent Edward",
    email: "vincent@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
