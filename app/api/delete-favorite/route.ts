import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";

export const PUT = async (req: any) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const sessionData = await req.headers.get("Session");
    const session = JSON.parse(sessionData);

    await connectMongoDB();

    const updatedUser = await User.findByIdAndUpdate(
      session.user._id,
      {
        $pull: { "favorites.items": { productId: id } },
      },
      { new: true }
    );

    if (!updatedUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse("Favorite list modified", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
