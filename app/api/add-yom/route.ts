import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Yom from "@/models/Yom";

export const PUT = async (req: any) => {
  try {
    const { post } = await req.json();
    await connectMongoDB();

    const yomData = {
      id: post._id,
      title: post.title,
      details: post.details,
      producer: post.producer,
      category: post.category,
      strength: post.strength,
      origin: post.origin,
      flavor: post.flavor,
      rating: post.rating,
      tags: post.tags,
      image: post.image,
    };

    let existingYom = await Yom.findOne();

    if (!existingYom) {
      return new NextResponse("Yom not found", { status: 404 });
    }

    Object.assign(existingYom, yomData);

    await existingYom.save();

    return new NextResponse("Yom created", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
