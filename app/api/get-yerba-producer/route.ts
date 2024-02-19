import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const producer = req.nextUrl.searchParams.get("producer");
    await connectMongoDB();
    const data = await Post.find({ producer: producer }).limit(4);
    return new NextResponse(JSON.stringify(data));
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
