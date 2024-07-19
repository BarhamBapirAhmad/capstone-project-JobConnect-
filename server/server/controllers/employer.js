const express = require("express");
const Employer = require("../models/employer");

const employerController = {};

// Get all employers
employerController.all = async (req, res) => {
  try {
    const employers = await Employer.find();
    res.json(employers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get an employer by id
employerController.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const employer = await Employer.findById(id);
    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }
    res.status(200).json(employer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new employer
employerController.create = async (req, res) => {
  try {
    const newEmployer = new Employer(req.body);
    const savedEmployer = await newEmployer.save();
    res.status(201).json(savedEmployer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an employer by id
employerController.update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployer = await Employer.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedEmployer) {
      return res.status(404).json({ message: "Employer not found" });
    }
    res.status(200).json(updatedEmployer);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// Delet by Id
employerController.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const employer = await Employer.findByIdAndDelete(id);

    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    res.json({ message: "Employer deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = employerController;
