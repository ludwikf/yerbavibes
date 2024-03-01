import { authOptions } from "@/libs/authOptions";
import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import Review from "@/models/Review";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const session: any = await getServerSession(authOptions);
    await connectMongoDB();

    const reviews = await Review.find({ user: session.user._id }).populate({
      path: "post",
      model: Post,
    });

    return new NextResponse(JSON.stringify(reviews));
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
