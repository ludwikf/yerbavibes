import { authOptions } from "@/libs/authOptions";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const PUT = async (req: any) => {
  try {
    const session: any = await getServerSession(authOptions);
    const { username } = await req.json();
    await connectMongoDB();

    const updatedUsername = await User.findByIdAndUpdate(session?.user._id, {
      username: username,
    });

    if (!updatedUsername) {
      return new NextResponse("Error changing username", { status: 400 });
    }

    return new NextResponse("Username changed", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
