import mongoose from "mongoose";

const resetTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

resetTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 1200 });

export default mongoose.models.ResetToken ||
  mongoose.model("ResetToken", resetTokenSchema);
