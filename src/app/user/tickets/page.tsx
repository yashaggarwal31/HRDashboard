"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/UserNavbar";
import TicketGeneratorButton from "@/components/TicketGeneratorButton";
import Pagination from "@/components/Pagination";
import Link from "next/link";

const paginate = (items: any, pageNumber: any, pageSize: any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

function Tickets() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const [allFilteredData, setAllFilteredData] = useState([{}]);
  const [filterApplied, setFilterApplied] = useState("");
  const [myTickets, setMyTickets] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(false);

  let data = paginate(myTickets, currentPage, pageSize);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/ticket", {
          headers: {
            Accept: "application/json",
            method: "GET",
          },
        });

        if (response) {
          const ticketData = await response.json();
          setMyTickets(ticketData);
          data = paginate(ticketData, currentPage, pageSize);
          setCurrentData(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (filterApplied == "") {
      data = paginate(myTickets, currentPage, pageSize);
    } else {
      data = paginate(allFilteredData, currentPage, pageSize);
    }
    setCurrentData(data);
  }, [currentPage, filterApplied]);

  const onPageChange = (page: any) => {
    setCurrentPage(page);
  };

  const statusFilter = (str: string) => {
    if (str == filterApplied) {
      setAllFilteredData([{}]);
      setFilterApplied("");
      return;
    }

    setFilterApplied(str);
    const filteredData = myTickets.filter((single: any) => {
      return single.ticketStatus == str;
    });

    setAllFilteredData(filteredData);
    setCurrentPage(1);
    const actualData = paginate(filteredData, currentPage, pageSize);
    setCurrentData(actualData);
  };

  return (
    <div>
      <Navbar />

      <div className="flex items-stretch">
        <div className="w-[22%] bg-slate-100 items-stretch h-screen">
          <div className="mx-2 my-1 mt-2 text-xl">Filters</div>
          <div
            className={`${
              filterApplied == "Solved"
                ? "border-sky-500 text-sky-500"
                : "border-gray-300 text-gray-400"
            } border-2  py-2 px-4 rounded-lg inline-block cursor-pointer m-2`}
            onClick={() => statusFilter("Solved")}
          >
            Solved
          </div>
          <div
            className={`${
              filterApplied == "In Progress"
                ? "border-sky-500 text-sky-500"
                : "border-gray-300 text-gray-400"
            } border-2  py-2 px-4 rounded-lg inline-block cursor-pointer `}
            onClick={() => statusFilter("In Progress")}
          >
            In Progress
          </div>
        </div>

        <div className="w-[78%]">
          <div className="py-6 px-2">
            <TicketGeneratorButton />
          </div>

          <div>
            {currentData.map((ticket: any) => (
              <div
                key={ticket.ticketId}
                className="bg-slate-50 flex items-center justify-around py-4  border-b border-sky-500"
              >
                <div>{ticket.ticketAssigned}</div>
                <div>{ticket.ticketSubject}</div>
                <div
                  className={`${
                    ticket.ticketStatus == "In Progress"
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
            items={
              filterApplied == "" ? myTickets.length : allFilteredData.length
            }
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Tickets;
