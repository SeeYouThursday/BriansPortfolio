import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    trim: true,
  },
});

const Contact = model('Contact', contactSchema);

export default Contact;
