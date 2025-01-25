import connectMongo from "@/app/utils/connect-mongo";
import { NextResponse } from "next/server";
import Ticket from "../../models/Ticket";

type Params = {
  params: {
    id: string;
  };
};
export async function DELETE(req: Request, { params }: Params): Promise<NextResponse> {
  try {
    await connectMongo();
    await Ticket.findByIdAndDelete(params.id);

    return NextResponse.json({ message: "Ticket başarıyla silindi!!!" });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Ticket silinirken bir hata oluştu!!!",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}

// id'si bilinen ticket'ı döndür
export async function GET(req: Request, { params }: Params) {
  try {
    // veritabanına bağlan
    await connectMongo();
    // id'si bilinen ticket'ı bul
    const ticket = await Ticket.findById(params.id);
    // Ticket bulunamazsa
    if (!ticket) {
      return NextResponse.json({ message: "Ticket bulunamadı!!!" }, { status: 404 });
    }
    // Ticket'ı döndür
    return NextResponse.json({ message: "Ticket verisi başarıyla alındı", ticket });
  } catch (error) {
    return NextResponse.json(
      { message: "Ticket alınırken bir hata oluştu!!!", error },
      { status: 500 }
    );
  }
}
// id'si ve güncel bilgileri bilinen elemanı güncelle

export async function PUT(req: Request, { params }: Params) {
  try {
    await connectMongo();
    const body = await req.json();
    const updated = await Ticket.findByIdAndUpdate(params.id, body);

    return NextResponse.json({ message: "Ticket verisi başarıyla güncellendi", ticket: updated });
  } catch (error) {
    return NextResponse.json(
      { message: "Ticket güncellerken bir hata oluştu!!!", error: error },
      { status: 500 }
    );
  }
}
