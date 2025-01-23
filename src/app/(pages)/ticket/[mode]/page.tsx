import Form from "@/app/components/form";
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

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-2xl text-zinc-500">
        {isEditMode ? "Güncelleme Modundayız" : "Oluşturma Modundayız"}
      </h1>
      <Form editItem={isEditMode} />
    </div>
  );
};

export default Ticket;
