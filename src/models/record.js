import mongoose, { Schema } from 'mongoose';

const RecordSchema = new Schema({
  userId: Schema.Types.ObjectId,
  date: Date,
  maxStrL: Number,
  maxStrR: Number,
  powerL: Number,
  powerR: Number,
  RSIAvg1st: Number,
  RSIAvg2nd: Number,
  RSIMax1st: Number,
  RSIMax2nd: Number,
  reactionRate1st: Number,
  reactionRate2nd: Number,
  agilityFrontBack1st: Number,
  agilityFrontBack2nd: Number,
  agilityLeftRight1st: Number,
  agilityLeftRight2nd: Number,
  bodyRotationAbilityL: Number,
  bodyRotationAbilityR: Number,
  gripStrengthL: Number,
  gripStrengthR: Number,
});

const Record = mongoose.model('Record', RecordSchema);
export default Record;