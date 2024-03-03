import { Resend } from "resend";
import connectMongoDB from "@/libs/mongodb";
import Settings from "@/models/Settings";
import { NextResponse } from "next/server";
import User from "@/models/User";
import ResetToken from "@/models/ResetToken";
import crypto from "crypto";

const resend = new Resend(process.env.RESEND);

export async function POST(req: any) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    // const webProps: any = await Settings.find();

    const user = await User.findOne({ email: email });

    if (!user) {
      return new NextResponse("Account with that Email doesn't exist", {
        status: 404,
      });
    }

    const token = crypto.randomBytes(20).toString("hex");

    const newToken = new ResetToken({
      token: token,
      user: user._id,
    });

    const savedToken = await newToken.save();

    if (!savedToken) {
      return new NextResponse("Failed to send reset token", {
        status: 400,
      });
    }

    const emailData = await resend.emails.send({
      // from: `ludwik<help@${webProps[0].domain}>`,
      from: `ludwik<help@ludwikfaron.com>`,
      to: email,
      subject: "YerbaVibes password reset",
      text: `
      Hello ${user.username}, someone (hopefully you) requested a password reset for this account. If you did want to reset your password, please click here: ${process.env.NEXT_PUBLIC_WEB_URL}/reset-password/${savedToken.token}

      For security reasons, this link is only valid for 20 minutes.
          
      If you did not request this reset, please ignore this email.`,
    });

    if (!emailData) {
      return new NextResponse("Error sending email", { status: 400 });
    }

    return new NextResponse("Email sent");
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
