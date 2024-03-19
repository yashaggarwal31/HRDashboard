"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TicketGeneratorButton from "@/components/TicketGeneratorButton";
import { myTickets } from "../data/myTickets";
import Pagination from "@/components/Pagination";
import Link from "next/link";

const paginate = (items: any, pageNumber: any, pageSize: any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

function Tickets() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const onPageChange = (page: any) => {
    setCurrentPage(page);
  };

  const data = paginate(myTickets, currentPage, pageSize);
  return (
      <div className="flex">
        <div className="w-[22%] bg-slate-100">Filters</div>

        <div className="w-[78%]">
          <div className="py-6 px-2">
            <TicketGeneratorButton />
          </div>

          <div>
            {data.map((ticket: any) => (
              <div
                key={ticket.ticketId}
                className="bg-slate-50 flex items-center justify-around py-4  border-b border-sky-500"
              >
                <div>{ticket.ticketAssigned}</div>
                <div>{ticket.ticketSubject}</div>
                <div
                  className={`${
                    ticket.ticketStatus == "Pending"
                      ? "bg-red-500"
                      : "bg-green-500 "
                  }  rounded-full py-1 px-2 text-sm text-white`}
                >
                  {ticket.ticketStatus}
                </div>
                <div>{ticket.ticketCreatedAt}</div>
                <Link
                  href={{ pathname: "./tickets/show", query: ticket }}
                  className="text-sm text-blue-500 cursor-pointer bg-blue-200 rounded-full py-1 px-2 hover:bg-blue-100"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <Pagination
            items={myTickets.length} // 100
            currentPage={currentPage} // 1
            pageSize={pageSize} // 10
            onPageChange={onPageChange}
          />
        </div>
      </div>
  );
}

export default Tickets;
