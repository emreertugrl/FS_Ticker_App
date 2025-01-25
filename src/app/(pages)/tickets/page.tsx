import Card from "@/app/components/card";
import { getTickets } from "@/app/utils/service";
import React from "react";

const Tickets = async () => {
  // Tickets verileri alınır.
  const { tickets } = await getTickets();
  // ticket'ların kategorilerini benzersiz bir dizi olarak tan.
  const categories = [...new Set(tickets.map((ticket) => ticket.category))];
  return (
    <div className="">
      {categories.map((category, key) => (
        <div key={key} className="mb-4">
          <h2 className="mb-2 text-xl text-zinc-400 font-semibold">{category}</h2>

          <div className="">
            {tickets
              .filter((ticket) => ticket.category === category)
              .map((ticket, key) => (
                <Card key={key} ticket={ticket} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
