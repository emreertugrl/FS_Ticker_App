"use client";
import React, { FormEvent } from "react";

type Props = {
  editItem: boolean;
};

const Form = ({ editItem }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form data alma işlemleri burada yapılabilir
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const ticketData = Object.fromEntries(formData.entries());
    // todo api'e ticket oluşturma isteği at
  };

  return (
    <div className="max-w-[600px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <fieldset>
          <label htmlFor="title">Başlık</label>
          <input type="text" required name="title" />
        </fieldset>
        <fieldset>
          <label htmlFor="description">Açıklama</label>
          <input type="text" required name="description" />
        </fieldset>

        <fieldset>
          <label htmlFor="category">Kategori</label>
          <select name="category">
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
          <input type="range" required name="progress" />
        </fieldset>

        <fieldset>
          <label htmlFor="status">Durum</label>
          <select name="status">
            <option>Beklemede</option>
            <option>Devam Ediyor</option>
            <option>Çözüldü</option>
          </select>
        </fieldset>
        <button
          className="mt-5 bg-blue-600 p-2 rounded-md font-semibold hover:bg-blue-700 transition"
          type="submit"
        >
          {editItem ? "Düzenle" : "Oluştur"}
        </button>
      </form>
    </div>
  );
};

export default Form;
