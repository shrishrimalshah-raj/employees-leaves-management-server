import mongoose from "mongoose";

const Schema = mongoose.Schema;

// LeaveTypeSchema
const LeaveTypeSchema = new Schema(
  {
    leaveTypeId: { type: Schema.Types.ObjectId, required: true, unique: true },
    leaveType: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const LeaveTypeModel = mongoose.model("LeaveType", LeaveTypeSchema);
export default LeaveTypeModel;
