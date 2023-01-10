const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
});

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  adress: String,
  CPF: Number,
});

const User = mongoose.model("user", userSchema);
const Client = mongoose.model("client", clientSchema);

export { User, Client };
