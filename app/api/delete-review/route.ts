import connectMongoDB from "@/libs/mongodb";
import Log from "@/models/Log";
import Post from "@/models/Post";
import Review from "@/models/Review";
import { NextResponse } from "next/server";

export const DELETE = async (req: any) => {
  try {
    const reviewId = req.nextUrl.searchParams.get("id");
    const sessionData = await req.headers.get("Session");
    const session = JSON.parse(sessionData);
    await connectMongoDB();

    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return new NextResponse("Review is already deleted", { status: 400 });
    }
    const associatedPost = await Post.findById(deletedReview.post);

    if (associatedPost) {
      associatedPost.ratingCount -= 1;
      if (associatedPost.ratingCount <= 0) {
        associatedPost.ratingValue = 0;
        associatedPost.ratingCount = 0;
      } else {
        associatedPost.ratingValue =
          (associatedPost.ratingValue * (associatedPost.ratingCount + 1) -
            deletedReview.rating) /
          associatedPost.ratingCount;
      }
      await associatedPost.save();
    }
    return new NextResponse("Review deleted", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
