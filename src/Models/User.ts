import mongoose, { Document, Schema } from '../DataBase/Database';

export interface IUser extends Document {
  name: string;
  surname: string;
  dateOfBirth: Date;
  email: string;
  password: string;
  preset: number;
  connectionHistory: Array<mongoose.Schema.Types.ObjectId>;
  transactions: Array<mongoose.Schema.Types.ObjectId>;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    require: [true, 'Please enter a name.'],
  },
  surname: {
    type: String,
    require: [true, 'Please enter a surname.'],
  },
  dateOfBirth: {
    type: Date,
    require: [true, 'Please enter a date of birth.'],
  },
  email: {
    type: String,
    require: [true, 'Please enter an email address.'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Please enter a password.'],
    minlength: [6, 'Your password must be at least 6 characters long.'],
  },
  preset: {
    type: Number,
    require: false,
    default: 1,
  },
  connectionHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ConnectionHistory' }],
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
});

export default mongoose.model<IUser>('User', UserSchema);
