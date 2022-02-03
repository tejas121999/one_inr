var express = require("express");
var router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const { wrapper } = require("../utils/errorWrap");

const {
  addVendor,
  updateVendor,
  getAllVendor,
  deleteVendor,
  generateVendorPdf,
  generateVendorCsv,
  getVenorById,
  getVendorExcel,
} = require("../controllers/vendors"); //Importing Vendor controller.
// const {addVendor,updateVendor,getAllVendor,deleteVendor, getVenorById}= require('../controllers/vendors') //Importing Vendor controller.

const validationError = require("../middleware/validationError");
const {
  createVendorValidation,
  updateVendorValidation,
} = require("../validations/vendors");

router.post(
  "/",
  checkAuth,
  createVendorValidation,
  validationError,
  wrapper(addVendor)
);

router.put(
  "/:id",
  checkAuth,
  updateVendorValidation,
  validationError,
  wrapper(updateVendor)
);


router.get("/",checkAuth, wrapper(getAllVendor));
router.get("/get-vendor-pdf", checkAuth, generateVendorPdf);
router.get("/get-vendor-csv", checkAuth, generateVendorCsv);
router.get("/get-vendor-xlsx", checkAuth, getVendorExcel);

router.get("/:id", checkAuth, wrapper(getVenorById));
router.delete("/:id", checkAuth, wrapper(deleteVendor));
module.exports = router;
