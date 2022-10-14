import jwt from 'jsonwebtoken';

const jwtVerify = async (req, res, next) => {
  const token = req.headers.authorization.split('Bearer ')[1];
  if (!token) return res.send(500).send({ auth: false, message: 'No token provided.' });
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.status(401).json({ error: 'Auth Error from authChecker' });
      } else {
        return next();
      }
    });
  } catch (e) {
    return next(e);
  }
};

export default jwtVerify;