"use client";
import { ITicket, ITicketData } from "@/app/api/models/Ticket";
import { createTicket, updateTicket } from "@/app/utils/service";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

type Props = {
  editItem: ITicketData | null;
};

const Form = ({ editItem }: Props) => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form data alma işlemleri burada yapılabilir
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const ticketData = Object.fromEntries(formData.entries());
    // güncellenecek eleman yoksa
    if (!editItem) {
      // api'e ticket oluşturma isteği at
      await createTicket(ticketData as unknown as ITicket);
    } else {
      // api'e ticket güncelleme isteği at
      await updateTicket(editItem._id, ticketData as unknown as ITicket);
    }
    // kullanıcıyı tickets sayfasına yönlendir
    router.push("/tickets");

    // sayfayı yenile
    router.refresh();
  };

  return (
    <div className="max-w-[600px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <fieldset>
          <label htmlFor="title">Başlık</label>
          <input type="text" required name="title" defaultValue={editItem?.title} />
        </fieldset>
        <fieldset>
          <label htmlFor="description">Açıklama</label>
          <input type="text" required name="description" defaultValue={editItem?.description} />
        </fieldset>

        <fieldset>
          <label htmlFor="category">Kategori</label>
          <select name="category" defaultValue={editItem?.category}>
            <option>Yazılım Sorunu</option>
            <option>Donanım Sorunu</option>
            <option>Bağlantı Sorunu</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Öncelik</label>
          <div className="flex gap-5">
            {new Array(5).fill("").map((i, key) => (
              <div className="flex gap-2  " key={key}>
                <input
                  className="cursor-pointer"
                  id={String(key)}
                  type="radio"
                  name="priority"
                  value={key + 1}
                  defaultChecked={editItem?.priority === key + 1}
                />
                <label className="font-semibold text-lg cursor-pointer" htmlFor={String(key)}>
                  {key + 1}
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <label htmlFor="progress">İlerleme</label>
          <input type="range" required name="progress" defaultValue={editItem?.progress} />
        </fieldset>

        <fieldset>
          <label htmlFor="status">Durum</label>
          <select name="status" defaultValue={editItem?.status}>
            <option>Beklemede</option>
            <option>Devam Ediyor</option>
            <option>Çözüldü</option>
          </select>
        </fieldset>
        <button
          className="mt-5 bg-blue-600 p-2 rounded-md font-semibold hover:bg-blue-700 transition"
          type="submit"
        >
          {editItem ? "Kaydet" : "Oluştur"}
        </button>
      </form>
    </div>
  );
};

export default Form;
