const express = require("express");
const router = express.Router();

//Routes
const {
  createBootcamp,
  getBootcamps,
  deleteBootcamp,
  getBootcamp,
  updateBootcamp,
} = require("../controllers/bootcampsController");

/*
/api/v1/bootcamps
*/

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
