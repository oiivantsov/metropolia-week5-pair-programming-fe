const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true }, // e.g., Full-time, Part-time, Contract
  description: { type: String, required: true },
  company: {
    name: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
  },
  location: { type: String, required: true }, // e.g., City, State, or Remote
  salary: { type: Number, required: true }, // e.g., Annual or hourly salary
  postedDate: { type: Date, default: Date.now }, // Date the job was posted
});

/* 
The purpose of this code snippet:

virtuals: true: This includes virtual fields (fields not stored in the database but
computed dynamically) when converting a Mongoose document to JSON.

transform: Adds a new id field to the JSON representation, derived from the _id field.
Removes the need for the frontend to deal with MongoDB-specific _id naming.
*/

// add  virtual field id
jobSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    return ret;
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
