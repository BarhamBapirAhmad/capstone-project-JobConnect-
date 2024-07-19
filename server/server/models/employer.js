const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  website: {
    type: String,
  
    trim: true,
    validate: {
      // Custom validation for website format
      validator: (value) => {
        const urlRegex = /^((https?|ftp):\/\/)?[^\s]+/; // Basic URL format check
        return urlRegex.test(value);
      },
      message: (props) => `${props.value} is not a valid website URL!`,
    },
  },
  industry: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  socialMedia: {
    type: {
      facebook: {
        type: String,
        trim: true,
      },
      linkedin: {
        type: String,
        trim: true,
      },
    },
  },
});

module.exports = mongoose.model("Employer", employerSchema);
