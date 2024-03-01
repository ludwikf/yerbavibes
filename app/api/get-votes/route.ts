import { authOptions } from "@/libs/authOptions";
import connectMongoDB from "@/libs/mongodb";
import Vote from "@/models/Vote";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const session: any = await getServerSession(authOptions);
    let user = "";
    if (session) {
      user = session.user._id;
    }

    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();

    let userVoteType: any = "";

    const votes = await Vote.find({ review: id });

    const userVote = votes.find(
      (vote) => vote.user.toString() === user.toString()
    );
    if (userVote) {
      userVoteType = userVote.type;
    }

    const responseData = {
      votes,
      userVoteType,
    };

    return new NextResponse(JSON.stringify(responseData));
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
