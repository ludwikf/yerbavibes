import { NextResponse } from "next/server";
import Review from "@/models/Review";
import connectMongoDB from "@/libs/mongodb";
import Log from "@/models/Log";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";
import Vote from "@/models/Vote";
import Post from "@/models/Post";

export const POST = async (req: any) => {
  try {
    const session: any = await getServerSession(authOptions);
    const { post, rating, description } = await req.json();
    const user = session.user._id;
    await connectMongoDB();
    const existingReview = await Review.findOne({ post: post, user: user });

    const existingPost = await Post.findById(post);
    if (!existingPost) {
      return new NextResponse("Post not found", { status: 404 });
    }

    if (existingReview) {
      const oldRating = existingReview.rating;
      existingReview.rating = rating;
      existingReview.comment = description;

      const savedReview = await existingReview.save();

      if (!savedReview) {
        return new NextResponse("Error saving review", { status: 400 });
      }

      const allReviewsForPost = await Review.find({ post: post });
      const totalRating = allReviewsForPost.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      const newRatingValue = totalRating / allReviewsForPost.length;
      existingPost.ratingValue = newRatingValue;

      await existingPost.save();

      await Vote.deleteMany({ review: existingReview._id });

      const newLog = new Log({
        user: {
          id: session.user._id,
          email: session.user.email,
          username: session.user.username,
        },
        actionType: "Other",
        details: "Review modified",
      });

      await newLog.save();

      return new NextResponse("Review created", { status: 200 });
    } else {
      const newReview = new Review({
        post: post,
        user: user,
        rating: rating,
        comment: description,
      });

      const savedReview = await newReview.save();

      if (!savedReview) {
        return new NextResponse("Error saving review", { status: 400 });
      }

      const newRatingValue =
        (existingPost.ratingValue * existingPost.ratingCount + rating) /
        (existingPost.ratingCount + 1);
      existingPost.ratingValue = newRatingValue;
      existingPost.ratingCount++;

      await existingPost.save();

      const newLog = new Log({
        user: {
          id: session.user._id,
          email: session.user.email,
          username: session.user.username,
        },
        actionType: "Other",
        details: "Review created",
      });

      await newLog.save();

      return new NextResponse(newReview, { status: 200 });
    }
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
