import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
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

    const newPost = new Post({
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
    const savedPost = await newPost.save();

    if (!savedPost) {
      return new NextResponse("Error saving post", { status: 400 });
    }

    return new NextResponse("Post created", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
