import mongoose from "mongoose";

const yomSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    producer: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    strength: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    flavor: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    tags: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Yom || mongoose.model("Yom", yomSchema);
