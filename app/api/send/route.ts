import { Resend } from "resend";
import Newsletter from "@/models/Newsletter";
import connectMongoDB from "@/libs/mongodb";
import Settings from "@/models/Settings";
import Log from "@/models/Log";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND);

export async function POST(req: any) {
  try {
    const { name, email, content } = await req.json();
    await connectMongoDB();
    const webProps: any = await Settings.find();

    const data = await resend.emails.send({
      // from: `ludwik<help@${webProps[0].domain}>`,
      from: `ludwik<help@ludwikfaron.com>`,
      to: "faronludwik@gmail.com",
      subject: "Contact form",
      text: content,
      reply_to: email,
    });

    if (!data) {
      return new NextResponse("Error sending email", { status: 400 });
    }

    return new NextResponse("Email sent");
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
