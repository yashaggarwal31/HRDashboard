"use client";

import React from "react";
import Link from "next/link";

function TicketGeneratorButton() {
  return (
    <Link
      href="/tickets/new"
      className="inline-block bg-red-600 p-2 rounded-md cursor-pointer text-white"
    >
      <div>+ Add Ticket</div>
    </Link>
  );
}

export default TicketGeneratorButton;
