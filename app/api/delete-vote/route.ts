import { authOptions } from "@/libs/authOptions";
import connectMongoDB from "@/libs/mongodb";
import Log from "@/models/Log";
import Vote from "@/models/Vote";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const DELETE = async (req: any) => {
  try {
    const session: any = await getServerSession(authOptions);
    const user = session?.user._id;
    const { review, type } = await req.json();
    await connectMongoDB();

    const deletedVote = await Vote.findOneAndDelete({
      user: user,
      review: review,
    });

    if (!deletedVote) {
      return new NextResponse("Vote is already deleted", {
        status: 400,
      });
    }

    return new NextResponse("Vote has been deleted", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
