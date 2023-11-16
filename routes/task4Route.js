const express = require('express');
const router = express.Router();
const controller = require('../controllers/task4Controller');

router.get("/", controller.show // (req, res)=>{
    // let {emotions} = require("../data");
    // res.render("task1", {emotions});}
);
router.get("/:name", controller.showDetails);


module.exports = router;