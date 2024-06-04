import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Interface for User
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

// Schema for User
const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create User model
const User: Model<IUser> = model<IUser>('User', userSchema);

export default User;
export { IUser };
