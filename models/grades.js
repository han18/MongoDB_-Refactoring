// this files hols a single database collection document

import mongoose from "mongoose";

const grades = new mongoose.Schema({
  scores: [
    {
      score_type: String,
      score: Number,
    },
  ],

  class_id: {
    type: Number,
  },

  learner_id: {
    type: Number,
  },
});

export default mongoose.model("Grade", grades);
