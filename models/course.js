const mongoose = require('mongoose');

// Define the schema for the "courses" collection
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  // Add more fields as per your requirements
});

// Create the "courses" model based on the schema
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
