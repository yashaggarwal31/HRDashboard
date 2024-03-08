import React from "react";
import Navbar from "@/components/Navbar";
import TicketGeneratorButton from "@/components/TicketGeneratorButton";

import { myTickets } from "../data/myTickets";

function Tickets() {
  return (
    <div>
      <Navbar />
      {/* <span className="inline-block bg-red-600 p-2 rounded-md cursor-pointer text-white">
        + Generate new ticket
      </span> */}

      <TicketGeneratorButton />

      <div>
        {myTickets.map((ticket) => (
          <ul>
            <li>
              <div className="bg-slate-100 flex justify-around p-3 mb-2">
                <div>{ticket.ticketAssigned}</div>
                <div>{ticket.ticketSubject}</div>
                <div>{ticket.ticketStatus}</div>
                <div>{ticket.ticketCreatedAt}</div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Tickets;
