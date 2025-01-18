import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 2701;
export const MONGODB_URI = process.env.MONGODB_URI;
