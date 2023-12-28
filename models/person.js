import { Schema, model, models } from 'mongoose';

const PersonSchema = new Schema({
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

const Person = models.Person || model("Person", PersonSchema);

export default Person;