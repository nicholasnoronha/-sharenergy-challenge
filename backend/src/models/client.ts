import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  adress: String,
  CPF: Number,
});

const ClientModel = mongoose.model("client", clientSchema);

export { ClientModel };
