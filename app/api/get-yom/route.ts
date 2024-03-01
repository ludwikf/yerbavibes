import connectMongoDB from "@/libs/mongodb";
import Yom from "@/models/Yom";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    await connectMongoDB();
    const data = await Yom.find();
    return new NextResponse(JSON.stringify(data));
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
