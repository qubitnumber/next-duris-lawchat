import { Schema, model, models } from 'mongoose';
import LUser from './user';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: LUser,
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;