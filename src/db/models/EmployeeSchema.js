import mongoose from "mongoose";

const Schema = mongoose.Schema;

// EmployeeSchema
const EmployeeSchema = new Schema(
  {
    employeeId: { type: Schema.Types.ObjectId, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    departmentId: {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    phoneNumber: { type: Number, required: true, max: 10 },
    status: { type: String, required: true, default: "Active" },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
export default EmployeeModel;
