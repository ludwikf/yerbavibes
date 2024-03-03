import { authOptions } from "@/libs/authOptions";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import ResetToken from "@/models/ResetToken";

export const PUT = async (req: any) => {
  try {
    await connectMongoDB();
    const { token, password } = await req.json();

    const userToken = await ResetToken.findOne({ token: token });

    if (!userToken) {
      return new NextResponse("Token has expired", { status: 404 });
    }

    const user = await User.findById(userToken.user);

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const hashedNewPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(userToken.user, {
      password: hashedNewPassword,
    });

    if (!updatedUser) {
      return new NextResponse("Error changing password", { status: 400 });
    }

    await ResetToken.deleteMany({ user: userToken.user });

    return new NextResponse("Password changed", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
