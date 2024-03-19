"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

function Show({ searchParams }: any) {
  const data = searchParams;
  console.log(data);
  return (
    <div>
      <Navbar />

      <div>
        <div>#{data.ticketId}</div>
        <div>{data.ticketStatus}</div>
      </div>
    </div>
  );
}

export default Show;
