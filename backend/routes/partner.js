var express = require("express");
var router = express.Router();

const checkAuth = require("../middleware/checkAuth");
const { wrapper } = require("../utils/errorWrap");

const {
  addPartner,
  getPartner,
  deletePartner,
  getPartnerExcel,
  pdfOfPartner,
  updatePatner,
  exportPartnerCsv,
  getPartnerById,
} = require("../controllers/partner"); //Importing Vendor controller.

const validationError = require("../middleware/validationError");
const { partnerValidation } = require("../validations/partner");
const user = require("../utils/exportToCsv");

router.post(
  "/",
  checkAuth,
  partnerValidation,
  validationError,
  wrapper(addPartner)
);

router.get("/", checkAuth, wrapper(getPartner));
router.get("/get-partner-csv", checkAuth, wrapper(exportPartnerCsv));
router.get("/get-partnerById/:id", checkAuth, getPartnerById);
router.get("/get-partner-excel", checkAuth, getPartnerExcel);
router.get("/get-partnerPdf", checkAuth, pdfOfPartner);
router.get("/get-all-users-csv", checkAuth, user.exportsToCsv);
router.put("/update-partner/:id", checkAuth, updatePatner);
router.delete("/delete-partner/:id", checkAuth, deletePartner);

module.exports = router;
