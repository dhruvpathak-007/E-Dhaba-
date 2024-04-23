import mongoose from "mongoose";

export const connectDataBase = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dhruvpathak74:9720207705@cluster0.kx2tlti.mongodb.net/e-dhaba"
    )
    .then(() => {
      console.log("Database Connected...");
    });
};
