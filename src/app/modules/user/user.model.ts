/* eslint-disable @typescript-eslint/no-this-alias */
import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcrypt";

// user registratin schema
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isBlocked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// password hash pre hook
UserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(process.env.bcrypt_salt_rounds)
  );
  next();
});

// return document password empty string define
UserSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// export model
const User = mongoose.model<IUser>("User", UserSchema);
export default User;
