const express = require("express");
const router = express.Router();
const employerController = require("../controllers/employer");
const jobController = require("../controllers/job");
const userController = require("../controllers/user");

router.get("/employer/:id", employerController.findById);
router.get("/employers", employerController.all);
router.post("/employers", employerController.create);
router.put("/employer/:id", employerController.update);
router.delete("/employers/:id", employerController.delete);

router.get("/job/:id", jobController.findById);
router.get("/jobs", jobController.all);
router.post("/jobs", jobController.create);
router.put("/job/:id", jobController.update);
router.delete("/jobs/:id", jobController.delete);
router.delete("/jobs", jobController.deleteAll);

router.get("/user/:id", userController.findById);
router.get("/users", userController.all);
router.post("/users", userController.create);
router.put("/user/:id", userController.update);
router.delete("/users/:id", userController.delete);

module.exports = router;
