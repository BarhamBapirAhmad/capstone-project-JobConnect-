const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// applicationMethod: "",

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  jobDescription: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  jobType: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  jobCategory: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  companyName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  companyWebsite: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  companyDescription: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  linkedInProfile: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  twitterProfile: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  educationLevel: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  experienceLevel: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  certifications: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  skills: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  jobLocation: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  applicationDeadline: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  applicationInstructions: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: [String],
  },
  datePosted: {
    type: Date,
    default: Date.now,
    validate: {
      validator: (v) => v <= Date.now(),
      message: "Date posted can not be in the future",
    },
  },
});

// const jobSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//
//     maxlength: 100,
//   },
//   company: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },

//   skills: {
//     type: [String],
//   },

//   //field for application deadline
//   datePosted: {
//     type: Date,
//     default: Date.now,
//     validate: {
//       validator: (v) => v <= Date.now(),
//       message: "Date posted can not be in the future",
//     },
//   },
// });

module.exports = mongoose.model("Job", jobSchema);
