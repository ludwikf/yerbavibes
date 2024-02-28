import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
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
    ratingValue: {
      type: Number,
      default: 0,
    },
    ratingCount: {
      type: Number,
      default: 0,
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

export default mongoose.models.Post || mongoose.model("Post", postSchema);
