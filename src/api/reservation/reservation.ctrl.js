import Reservation from "../../models/reservation";

export const write = async (req, res) => {
  const { id, userName, title, date } = req.body;
  try {
    const reservation = new Reservation({
      userId: id,
      userName,
      title,
      date
    });
    await reservation.save();
    res.json({ status: 'success'});    
  } catch (e) {
    res.status(500);
  }
};

export const list = async (req, res) => {
  const id = req.params.id;

  try {
    const events = await Reservation.find({ userId: id }).sort({ date: -1 });
    res.json({ status: 'success', events: events });
  } catch (e) {
    res.status(500);
  }
};