import mongoose, { Document, Schema } from 'mongoose';
import { config } from '../Config/Config';

mongoose.set('strictQuery', false);
mongoose.connect(config.MONGO_URI).catch((error: Error): void => {
  console.log(error);
});

export { Document, Schema };
export default mongoose;
