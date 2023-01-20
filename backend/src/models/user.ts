import mongoose from "../db/config";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", userSchema);

export { UserModel };
