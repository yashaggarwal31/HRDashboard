import { Ticket } from "./models";
import { connectToDB } from "./utils";

export const getTickets = async () => {
  try {
    await connectToDB();
    const tickets = await Ticket.find();
    return tickets;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch tickets");
  }
};

export const postTicket = async (ticket: any) => {
  console.log(ticket);
  try {
    connectToDB();
    // const tickets = await Ticket.find();
    // await Ticket.create(ticket);
    console.log("Ticket Added");
    return "";
  } catch (error) {
    console.log(error);
    throw new Error("Failed to insert");
  }
};
