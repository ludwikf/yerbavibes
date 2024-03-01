import { authOptions } from "@/libs/authOptions";
import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/Post";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const PUT = async (req: any) => {
  try {
    const session: any = await getServerSession(authOptions);
    const { media } = await req.json();
    await connectMongoDB();

    const updatedUser = await User.findByIdAndUpdate(session.user._id, {
      avatar: media,
    });

    await updatedUser.save();

    if (!updatedUser) {
      return new NextResponse("Error saving avatar", { status: 400 });
    }

    return new NextResponse("Avatar created", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
