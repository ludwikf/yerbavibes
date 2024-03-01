import { authOptions } from "@/libs/authOptions";
import connectMongoDB from "@/libs/mongodb";
import Review from "@/models/Review";
import Vote from "@/models/Vote";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    const session: any = await getServerSession(authOptions);
    const user = session?.user._id;
    const { review, type } = await req.json();
    await connectMongoDB();

    const existingVote = await Vote.findOne({ user: user, review: review });

    if (existingVote) {
      existingVote.type = existingVote.type === "up" ? "down" : "up";
      await existingVote.save();
      return new NextResponse("Vote type updated", { status: 200 });
    }

    if (type === "up") {
      const newVote = new Vote({
        user: user,
        review: review,
        type: "up",
      });
      await newVote.save();
    } else {
      const newVote = new Vote({
        user: user,
        review: review,
        type: "down",
      });
      await newVote.save();
    }

    return new NextResponse("Vote created", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
