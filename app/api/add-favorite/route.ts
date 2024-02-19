import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import User from "@/models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (req: any) => {
  try {
    const { session, id } = await req.json();
    await connectMongoDB();

    const user = await User.findById(session.user._id);
    if (
      user.favorites.items.some((item: any) => item.productId.toString() === id)
    ) {
      return new NextResponse("Product already exists in favorites list", {
        status: 400,
      });
    }

    const savedUser = await User.findByIdAndUpdate(session.user._id, {
      $push: {
        "favorites.items": { productId: new mongoose.Types.ObjectId(id) },
      },
    });
    if (!savedUser) {
      return new NextResponse("Updating list error", { status: 400 });
    }

    return new NextResponse("Favorite list success", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
