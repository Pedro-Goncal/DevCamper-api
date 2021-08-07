//====================================
// @desc     Get all bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
//====================================

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

//====================================
// @desc     Get single bootcamps
// @route    GET /api/v1/bootcamps/:id
// @access   Public
//====================================

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Get sinlge bootcamp" });
};

//====================================
// @desc     Create new Bootcamp
// @route    POST /api/v1/bootcamps
// @access   Private
//====================================

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create a bootcamp" });
};

//====================================
// @desc     Update Bootcamp
// @route    PUT /api/v1/bootcamps/:id
// @access   Private
//====================================

exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update a bootcamp" });
};

//====================================
// @desc     Delete Bootcamp
// @route    DELETE /api/v1/bootcamps/:id
// @access   Private
//====================================

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete bootcamp" });
};
