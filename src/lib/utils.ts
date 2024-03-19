import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import mongoose from "mongoose";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const connectToDB = async () => {
  console.log("connecting1");
  try {
    console.log("connecting2");

    const URI = process.env.NEXT_PUBLIC_MONGO;
    if (!URI) {
      throw new Error("Mongo URI not there");
    }

    console.log("connecting2.5");

    // if (process.env.MONGO) {
    //   console.log("connecting3");

    // const options: ConnectOptions = {};
    await mongoose.connect(URI);
    // }
    console.log("connecting4");
  } catch (error) {
    console.log("Error from DB");
    console.log(error);
    throw new Error("Failed to Create DB");
  }
};
