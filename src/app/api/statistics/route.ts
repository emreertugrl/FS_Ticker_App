import connectMongo from "@/app/utils/connect-mongo";
import { NextResponse } from "next/server";
import Ticket from "../models/Ticket";

export async function GET() {
  try {
    // db bağlantısı kur
    await connectMongo();
    // db ticketları al
    const tickets = await Ticket.find();
    // toplam ticket sayısını hesapla
    const totalTickets = tickets.length;
    // her kategoride kaç tane varsa hesaplanır.
    const ticketsByCategory = tickets.reduce((acc, ticket) => {
      acc[ticket.category] = (acc[ticket.category] || 0) + 1;
      return acc;
    }, {});
    // her status kaç tane varsa hesaplanır.
    const ticketsBystatus = tickets.reduce((acc, ticket) => {
      acc[ticket.status] = (acc[ticket.status] || 0) + 1;
      return acc;
    }, {});
    // ortalama öncelik seviyesini hesaplama
    const totalPriority = tickets.reduce((acc, ticket) => acc + ticket.priority, 0);
    const averagePriority = totalPriority > 0 ? (totalPriority / totalTickets).toFixed(2) : 0;

    // ortalama öncelik seviyesini hesaplama
    const totalProgress = tickets.reduce((acc, ticket) => acc + ticket.progress, 0);
    const averageProgress = totalProgress > 0 ? (totalProgress / totalTickets).toFixed(2) : 0;

    // client cevep
    return NextResponse.json(
      {
        message: "İstatistikler hesaplandı.",
        totalTickets,
        ticketsByCategory,
        ticketsBystatus,
        averagePriority,
        averageProgress,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "İstatistikler hesaplanırken bir sorun oluştu.", error },
      { status: 500 }
    );
  }
}
