import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true,
  },
  phone: {
    type: Number,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
    required: true,
  },
  cpf: {
    type: Number,
    trim: true,
    required: true,
  },
});

const ClientModel = mongoose.model("client", clientSchema);

export { ClientModel };
