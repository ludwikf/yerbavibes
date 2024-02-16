import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const PUT = async (req: any) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const {
      title,
      details,
      producer,
      category,
      strength,
      origin,
      flavor,
      tag1,
      tag2,
      tag3,
      image,
    } = await req.json();
    await connectMongoDB();
    const savedPost = await Post.findByIdAndUpdate(id, {
      title: title,
      details: details,
      producer: producer,
      category: category,
      strength: strength,
      origin: origin,
      flavor: flavor,
      tags: [tag1, tag2, tag3],
      image: image,
    });
    if (!savedPost) {
      return new NextResponse("Updating error", { status: 400 });
    }

    return new NextResponse("Post updated", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
