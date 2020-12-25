import mongoose from "mongoose";

const Schema = mongoose.Schema;

// DepartmentSchema
const DepartmentSchema = new Schema(
  {
    deartmentId: { type: Schema.Types.ObjectId, required: true, unique: true },
    departmentName: { type: String, required: true, unique: true },
    departmentShortName: { type: String, required: true, unique: true },
    departmentCode: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const DepartmentModel = mongoose.model("Department", DepartmentSchema);
export default DepartmentModel;
