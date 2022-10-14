import User from '../../models/user';

export const register = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const exists = await User.findByEmail(email);
    if (exists) {
      res.status(409);
      return;
    }

    const user = new User({
      email,
      name,
      isAdmin: false
    });
    await user.setPassword(password);
    await user.save();

    const token = user.generateToken();
    res.json({ status: 'success', user: user.serialize(), accessToken: token});
    
  } catch (e) {
    res.status(500);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401);
    return;
  }

  try {
    const user = await User.findByEmail(email);
    if (!user) {
      res.status(401);
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      res.status(401);
      return;
    }

    const token = user.generateToken();
    res.json({ status: 'success', user: user.serialize(), accessToken: token});

  } catch (e) {
    res.status(500);
  }
};