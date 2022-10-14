import User from '../../models/user';
import Reservation from '../../models/reservation';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });
    res.json({ status: 'success', users });
  } catch (e) {
    res.status(500);
  }
};

export const getRerservation = async (req, res) => {
  try {
    // const Reservation = await Reservation.find().sort({ _id: -1 });
    const events = await Reservation.find();
    res.json({ status: 'success', events });
  } catch (e) {
    res.status(500);
  }
};