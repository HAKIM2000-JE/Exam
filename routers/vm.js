const express = require("express")
const router = express.Router();



const controller = require("../controllers/vm")

router
    .route("/:id")
    .get(controller.getVmbyId)
    .put(controller.updateVmById)
    .delete(controller.deleteVmbyId)

router
    .route("")
    .get(controller.getAllVm)
    .post(controller.addVmm)


module.exports = router;