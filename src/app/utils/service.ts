import { ITicket, ITicketData } from "../api/models/Ticket";

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

type GetTicketsResponse = {
  message: string;
  tickets: ITicketData[];
};
export const getTickets = async (): Promise<GetTicketsResponse> => {
  const res = await fetch(`${baseURL}/api/tickets`);
  if (!res.ok) {
    throw new Error("Tickets alınırken bir hata oluştu");
  }
  return await res.json(); // stringfy olarak gelen veriyi json çeviririz.
};

export const deleteTicket = async (id: string): Promise<void> => {
  const res = await fetch(`${baseURL}/api/tickets/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Tickets silinirken bir hata oluştu");
  }
};

type GetTicketResponse = {
  message: string;
  ticket: ITicketData;
};
export const getTicket = async (id: string): Promise<GetTicketResponse> => {
  const res = await fetch(`${baseURL}/api/tickets/${id}`);
  if (!res.ok) {
    throw new Error("Tickets verisi alınamadı");
  }
  return await res.json(); // stringfy olarak gelen veriyi json çeviririz.
};

export const updateTicket = async (id: string, data: ITicket): Promise<void> => {
  const res = await fetch(`${baseURL}/api/tickets/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Tickets güncellenirken bir hata oluştu");
  }
};
