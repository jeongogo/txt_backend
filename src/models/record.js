import mongoose, { Schema } from 'mongoose';

const RecordSchema = new Schema({
  userId: Schema.Types.ObjectId,
  date: Date,
  maxStrL: Schema.Types.Decimal128,
  maxStrR: Schema.Types.Decimal128,
  powerL: Schema.Types.Decimal128,
  powerR: Schema.Types.Decimal128,
  RSIAvg1st: Schema.Types.Decimal128,
  RSIAvg2nd: Schema.Types.Decimal128,
  RSIMax1st: Schema.Types.Decimal128,
  RSIMax2nd: Schema.Types.Decimal128,
  reactionRate1st: Schema.Types.Decimal128,
  reactionRate2nd: Schema.Types.Decimal128,
  agilityFrontBack1st: Schema.Types.Decimal128,
  agilityFrontBack2nd: Schema.Types.Decimal128,
  agilityLeftRight1st: Schema.Types.Decimal128,
  agilityLeftRight2nd: Schema.Types.Decimal128,
  bodyRotationAbilityL: Schema.Types.Decimal128,
  bodyRotationAbilityR: Schema.Types.Decimal128,
  gripStrengthL: Schema.Types.Decimal128,
  gripStrengthR: Schema.Types.Decimal128,
});

const Record = mongoose.model('Record', RecordSchema);
export default Record;