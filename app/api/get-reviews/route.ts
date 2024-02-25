import connectMongoDB from "@/libs/mongodb";
import Review from "@/models/Review";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const postId = req.nextUrl.searchParams.get("postId");
    await connectMongoDB();

    const reviews = await Review.find({ post: postId }).populate({
      path: "user",
      model: User,
    });

    return new NextResponse(JSON.stringify(reviews));
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
