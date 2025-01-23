import connectMongo from "@/app/utils/connect-mongo";
import { NextResponse } from "next/server";
import Ticket from "./models/Ticket";

export async function GET(): Promise<void> {
  try {
    await connectMongo();
    // API endpoint for getting data from MongoDB
    const tickets = await Ticket.find();
    NextResponse.json({
      message: "Ticket verileri alındı.",
      tickets,
    });
    return;
  } catch (error) {
    NextResponse.json({
      message: "Ticket verileri alınırken bir hata oluştu",
      error: error,
    });
    return;
  }
}

export async function POST(): Promise<void> {
  try {
    await connectMongo();
    // isteğin body kısmındaki veriyi al

    // veritabanına yeni ticket'ı kaydet

    // client'e cevap döndür
    NextResponse.json({
      message: "Hello from Next.js API!",
    });
    return;
  } catch (error) {}
}
