import { ITicketData } from "@/app/api/models/Ticket";
import Form from "@/app/components/form";
import { getTicket } from "@/app/utils/service";
import React from "react";
type Props = {
  // async await kullanılırsa promise olarak tanımlamamız lazım
  params: Promise<{
    mode: string;
  }>;
};
const Ticket = async ({ params }: Props) => {
  const { mode } = await params;
  // aldığımız parametreye göre sayfa hangi modda çalışacak
  const isEditMode = mode !== "new" ? true : false;

  let editItem: ITicketData | null = null;
  // eğer güncelleme modundaysak güncellenecek elemanın verilerini al
  if (isEditMode) {
    editItem = (await getTicket(mode)).ticket;
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-2xl text-zinc-500">
        {isEditMode ? "Ticketı Güncelle" : "Ticketı Oluşturma"}
      </h1>
      <Form editItem={editItem} />
    </div>
  );
};

export default Ticket;
