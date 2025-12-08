import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Portfolio = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  image: string; // url for string in public
  imageAlt: string; // alt for image
};

// mongoose schema
const portfolioSchema = new Schema<Portfolio>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
});

// defining the collection and model
const Portfolio =
  mongoose.models["portfolios"] ||
  mongoose.model("portfolios", portfolioSchema);

export default Portfolio;
