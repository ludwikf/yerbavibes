import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    const data = await Post.findById(id);
    return new NextResponse(JSON.stringify(data));
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
