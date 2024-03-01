import { authOptions } from "@/libs/authOptions";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const PUT = async (req: any) => {
  try {
    const session: any = await getServerSession(authOptions);
    const { currentPassword, newPassword } = await req.json();
    await connectMongoDB();

    const user = await User.findById(session?.user._id);

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordMatch) {
      return new NextResponse("Invalid password", { status: 400 });
    }

    if (currentPassword === newPassword) {
      return new NextResponse(
        "New password must be different from the old password",
        { status: 400 }
      );
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await User.findByIdAndUpdate(session?.user._id, {
      password: hashedNewPassword,
    });

    if (!updatedUser) {
      return new NextResponse("Error changing password", { status: 400 });
    }
    return new NextResponse("Password changed", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
