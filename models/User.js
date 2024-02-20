import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    favorites: {
      items: [
        {
          productId: {
            type: mongoose.Types.ObjectId,
            ref: "Post",
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
