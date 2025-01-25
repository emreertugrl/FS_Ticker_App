import connectMongo from "@/app/utils/connect-mongo";
import { NextResponse } from "next/server";
import Ticket from "../../models/Ticket";

type Params = {
  params: {
    id: string;
  };
};
export const DELETE = async (req: Request, { params }: Params): Promise<NextResponse> => {
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
};
