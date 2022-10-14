import mongoose, { Schema } from 'mongoose';

const RecordSchema = new Schema({
  key: String,
});

const Record = mongoose.model('Record', RecordSchema);
export default Record;