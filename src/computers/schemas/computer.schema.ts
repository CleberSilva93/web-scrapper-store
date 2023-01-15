import * as mongoose from 'mongoose';

const NotesSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  reviews: String,
  rating: String,
});

export const ComputerSchema = new mongoose.Schema({
  groupBy: String,
  link: String,
  updateAt: Date,
  notes: [NotesSchema],
});
