import mongoose from "mongoose";

const Schema = mongoose.Schema;

// LeaveSchema
const LeaveSchema = new Schema(
  {
    leaveId: { type: Schema.Types.ObjectId, required: true, unique: true },
    leaveTypeId: {
      type: Schema.Types.ObjectId,
      ref: "LeaveType",
    },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    description: { type: String, required: true },
    adminRemark: { type: String, required: false },
    adminRemarkDate: { type: Date, required: true },
    status: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  },
  {
    timestamps: true,
  }
);

const LeaveModel = mongoose.model("Leave", LeaveSchema);
export default LeaveModel;
