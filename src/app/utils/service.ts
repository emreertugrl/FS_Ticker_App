import { ITicket } from "../api/tickets/models/Ticket";

const baseURL = "http://localhost:3000";

export const createTicket = async (ticketData: ITicket): Promise<void> => {
  try {
    await fetch(`${baseURL}/api/tickets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticketData),
    });
  } catch (error) {
    console.log("Bir Sorun Oluştu", error);
  }
};

export const getTickets = async () => {
  const res = await fetch(`${baseURL}/api/tickets`);
  if (!res.ok) {
    throw new Error("Tickets alınırken bir hata oluştu");
  }
  return await res.json(); // stringfy olarak gelen veriyi json çeviririz.
};
