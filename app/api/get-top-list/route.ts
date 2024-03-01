import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const size = req.nextUrl.searchParams.get("size");
    await connectMongoDB();

    const data = await Post.find({ ratingValue: { $gt: 0 } })
      .sort({ ratingValue: -1 })
      .limit(size);

    return new NextResponse(JSON.stringify(data));
  } catch (error: any) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
