import mongoose, { Document, Schema } from '../DataBase/Database';

export interface ITransaction extends Document {
  date: Date;
  amount: Number;
  type: String;
  category: String;
  description: String;
}

const TransactionSchema: Schema = new Schema({
  date: {
    type: Date,
    require: [true, 'Please enter a date.'],
  },
  amount: {
    type: Number,
    require: [true, 'Please enter an amount.'],
  },
  type: {
    type: String,
    required: [true, 'Please enter a type.'],
  },
  category: {
    type: String,
    required: [true, 'Please enter a category.'],
  },
  description: {
    type: String,
    required: false,
  },
});


export default mongoose.model<ITransaction>('Transaction', TransactionSchema);
