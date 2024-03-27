"use client";

import { myTickets } from "@/data/myTickets";
import { postTicket } from "@/lib/data";
import React, { useState } from "react";

const MovieTicketForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    ticketId: "",
    ticketCategory: "",
    ticketSubCategory: "",
    ticketSubject: "",
    ticketDescription: "",
    ticketPriority: "",
  });
  const [subCategoryLocal] = useState({
    Admin: ["admin1", "admin2", "admin3", "admin4", "admin5"],
    "Human Resources": ["hr1", "hr2", "hr3", "hr4", "hr5"],
    "Information Technology": ["it1"],
  });

  const handleChange = (event: any) => {
    console.log(event);
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeCategory = (event: any) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    const ticketSubCategoryRef = document.getElementById("ticketSubCategory");
    if (ticketSubCategoryRef) {
      ticketSubCategoryRef.innerHTML = "";
      const option = document.createElement("option");
      option.innerHTML = "-- Select Subcategory --";
      ticketSubCategoryRef?.appendChild(option);
    }
    console.log(ticketSubCategoryRef);

    subCategoryLocal[value].map((ele: string) => {
      const option = document.createElement("option");
      option.innerHTML = ele;
      ticketSubCategoryRef?.appendChild(option);
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    // const res = await fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    // postTicket(formData);
    // myTickets.push(formData);
    console.log(formData);
  };

  return (
    <form className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-xl w-full px-6">
        <div className="ticket rounded-lg overflow-hidden bg-white shadow-lg">
          <div className="ticket-header bg-blue-500 py-4 px-6">
            <h2 className="text-xl font-bold text-white">#1245</h2>
          </div>

          <div className="ticket-body p-6">
            <div className="mb-6">
              <label
                htmlFor="ticketCategory"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Category
              </label>
              <select
                id="ticketCategory"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                name="ticketCategory"
                onChange={handleChangeCategory}
              >
                <option value="">-- Select category --</option>
                <option value="Admin">Admin</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Information Technology">
                  Information Technology
                </option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="ticketSubCategory"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Subcategory
              </label>
              <select
                id="ticketSubCategory"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                name="subTicketCategory"
              >
                <option value="">First Select category</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="ticketTitle"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="ticketTitle"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter ticket title"
                name="ticketSubject"
                value={formData.ticketSubject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="ticketContent"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Description
              </label>
              <textarea
                id="ticketContent"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                // rows="3"
                name="ticketDescription"
                placeholder="Enter ticket content"
                value={formData.ticketDescription}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                htmlFor="ticketAssigned"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Priority
              </label>
              <select
                id="ticketAssigned"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                name="ticketPriority"
                value={formData.ticketPriority}
                onChange={handleChange}
              >
                <option>-- Select Priority --</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MovieTicketForm;
