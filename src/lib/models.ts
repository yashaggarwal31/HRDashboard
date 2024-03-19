import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    required: true,
    unique: true,
  },
  ticketCategory: {
    type: String,
  },
  ticketSubCategory: {
    type: String,
  },
  ticketSubject: {
    type: String,
  },
  ticketDescription: {
    type: String,
  },
  ticketPriority: {
    type: String,
  },
  //   ticketCreatedAt: {
  //     type: Date,
  //   },
  //   ticketResolvedAt: {
  //     type: Date,
  //   },
});

export const Ticket =
  mongoose.models?.Ticket || mongoose.model("Ticket", ticketSchema);
