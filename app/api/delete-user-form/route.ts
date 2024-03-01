import { authOptions } from "@/libs/authOptions";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const PUT = async (req: any) => {
  try {
    const session: any = await getServerSession(authOptions);
    const { password } = await req.json();
    await connectMongoDB();

    const user = await User.findById(session?.user._id);

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return new NextResponse("Invalid password", { status: 400 });
    }

    const deletedUser = await User.findByIdAndDelete(session?.user._id);

    if (!deletedUser) {
      return new NextResponse("Error deleting user", { status: 400 });
    }
    return new NextResponse("User deleted", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
