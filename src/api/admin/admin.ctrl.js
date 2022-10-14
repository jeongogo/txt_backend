import User from '../../models/user';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });
    res.json({ status: 'success', users });
  } catch (e) {
    res.status(500);
  }
};