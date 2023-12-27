import { Schema, model, models } from 'mongoose';

const LUserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
  },
  image: {
    type: String,
  }
});

const LUser = models.LUser || model("LUser", LUserSchema);

export default LUser;