import connectMongo from "@/app/utils/connect-mongo";
import { NextResponse } from "next/server";
import Ticket from "./models/Ticket";

export async function GET(): Promise<NextResponse> {
  try {
    await connectMongo();
    // API endpoint for getting data from MongoDB
    const tickets = await Ticket.find();
    return NextResponse.json({
      message: "Ticket verileri alındı.",
      tickets,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Ticket verileri alınırken bir hata oluştu!!!",
      error: error,
    });
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    await connectMongo();
    // isteğin body kısmındaki veriyi al
    const body = await req.json();

    // veritabanına yeni ticket'ı kaydet
    // const newTicket = await Ticket.create(body);
    const newTicket = new Ticket(body);
    await newTicket.save();

    // client'e cevap döndür
    return NextResponse.json(
      {
        message: "Ticket Oluşturuldu",
        ticket: newTicket,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Ticket oluşturulma başarısız!!!",
        error: error,
      },
      { status: 400 }
    );
  }
}
