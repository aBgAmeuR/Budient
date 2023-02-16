import mongoose, { Document, Schema } from '../DataBase/Database';

export interface IConnectionHistory extends Document {
  date: Date;
  device: string;
}

const ConnectionHistorySchema: Schema = new Schema({
  date: {
    type: Date,
    required: false,
    default: Date.now,
  },
  device: {
    type: String,
    required: false,
  },
});

export default mongoose.model<IConnectionHistory>('ConnectionHistory', ConnectionHistorySchema);
