import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    console.log("xd");
    const sessionData = await req.headers.get("Session");
    const session = JSON.parse(sessionData);
    console.log(session);
    await connectMongoDB();

    const user = await User.findById(session.user._id).populate(
      "favorites.items.productId"
    );

    if (!user) {
      return new NextResponse("User not found", { status: 500 });
    }

    return new NextResponse(JSON.stringify(user.favorites.items));
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
