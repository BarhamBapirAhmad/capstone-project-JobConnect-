const express = require("express");
const Job = require("../models/job");

const jobController = {};
// Get all jobs
jobController.all = async (req, res) => {
  try {
    const { category } = req.query;
    const jobs = await Job.find(
      category && category !== "AllJobs" ? { jobCategory: category } : {}
    );
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a job by id
jobController.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    console.log(id);
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new job
jobController.create = async (req, res) => {
  console.log("hello");
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a job by id
jobController.update = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndUpdate(id, req.body, { new: true });
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// Delete by id
jobController.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Delete all jobs
jobController.deleteAll = async (req, res) => {
  try {
    const result = await Job.deleteMany({});

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No jobs found to delete" });
    }

    res.json({ message: "All jobs deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = jobController;
