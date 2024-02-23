import { authOptions } from "@/libs/authOptions";
import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    await connectMongoDB();
    const session: any = await getServerSession(authOptions);
    // const userId = req.nextUrl.searchParams.get("userId");

    const userId = session?.user?._id.toString();

    const user = await User.findOne({ _id: userId }).populate({
      path: "favorites.items.productId",
      model: Post,
    });

    if (!user) {
      return new NextResponse("User not found", { status: 500 });
    }

    return new NextResponse(JSON.stringify(user.favorites.items));
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
