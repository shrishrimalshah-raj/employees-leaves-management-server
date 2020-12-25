require('dotenv').config()

const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27018/employees-leaves-management"
}

export default Object.freeze(config);
