const express = require("express");
const {
  createDonor,
  getAlldonors,
  updateDonor,
  getOneDonor,
  deleteDonor,
  getDonorStats
} = require("../controllers/donor");
const { verifyToken } = require("../middlewares/verifyToken");


const router = express.Router();


router.post("/", createDonor);

router.get("/", getAlldonors);


router.put("/:id", updateDonor);


router.get("/find/:id", getOneDonor);


router.delete("/:id", deleteDonor);


router.get("/stats", getDonorStats);

module.exports = router;
 