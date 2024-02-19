import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";

export const GET = async (req: any) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const sessionData = await req.headers.get("Session");
    const session = JSON.parse(sessionData);

    await connectMongoDB();

    const user = await User.findById(session.user._id);

    const isFavorite = user.favorites.items.some(
      (item: any) => item.productId.toString() === id
    );
    return new NextResponse(JSON.stringify(isFavorite));
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
