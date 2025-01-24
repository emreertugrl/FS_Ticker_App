import { getTickets } from "@/app/utils/service";
import React from "react";

const Tickets = async () => {
  const tickets = await getTickets();
  console.log(tickets);
  return <div>Tickets</div>;
};

export default Tickets;
