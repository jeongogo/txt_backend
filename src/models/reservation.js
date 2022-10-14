import mongoose, { Schema } from 'mongoose';

const ReservationSchema = new Schema({
  userId: mongoose.Types.ObjectId,
  title: String,
  date: String
});

const Reservation = mongoose.model('Reservation', ReservationSchema);
export default Reservation;