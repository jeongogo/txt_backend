import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  email: String,
  hashedPassword: String,
  name: String,
  weight: Number,
  height: Number,
  birthday: Date,
  gender: String,
  isAdmin: Boolean
});

UserSchema.methods.setPassword = async function(password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function(password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
}

UserSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
}

UserSchema.methods.generateToken = function() {
  const token = jwt.sign(
    {
      _id: this.id,
      email: this.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    },
  );
  return token;
}

UserSchema.methods.serialize = function() {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

const User = mongoose.model('User', UserSchema);
export default User;