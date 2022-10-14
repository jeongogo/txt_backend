import mongoose, { Schema } from 'mongoose';

const RecordSchema = new Schema({
  userId: mongoose.Types.ObjectId,
  date: Date,
});

const Record = mongoose.model('Record', RecordSchema);
export default Record;