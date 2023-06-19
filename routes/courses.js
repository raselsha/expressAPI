const express = require('express')
const routes = express.Router()
const Course = require('../models/course'); // Import the "courses" model

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// get all courses
routes.get('/',async (req,res)=>{
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve courses' });
    }
})

// get single courses
routes.get('/:courseId',jsonParser,async (req,res)=>{
    const courseId = req.params.courseId
    try {
        const course = await Course.findById(courseId);
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve courses' });
    }
})

// create new courses
routes.post('/', jsonParser,async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new course' });
  }
});


//
// Example route to delete a course
routes.delete('/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    
    if (!deletedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting the course:', error);
    res.status(500).json({ error: 'Failed to delete the course' });
  }
});

// Example route to update a course
routes.put('/:id', jsonParser,async (req, res) => {
  try {
    const courseId = req.params.id;
    const updatedCourse = await Course.findByIdAndUpdate(courseId, req.body, { new: true });

    if (!updatedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error('Error updating the course:', error);
    res.status(500).json({ error: 'Failed to update the course' });
  }
});


module.exports = routes