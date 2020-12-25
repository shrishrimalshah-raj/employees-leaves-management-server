import mongoose from "mongoose";

const Schema = mongoose.Schema;

// BookSchema
const BookSchema = new Schema({
  name: { type: String, required: false },
  type: { type: String, required: false },
});


const BookModel = mongoose.model('Book', BookSchema);
export default BookModel;


