const express = require("express")
const router = express.Router()
const Sports = require("../models/sports.js")


// router.get("/", (req,res) => {
//     res.send("Controller Connected")
// })
router.get("/", (req, res) => {
    Sports.find({}, (err, foundSports) => {
        res.json(foundSports)
    })
})

router.post("/", (req, res) => {
    Sports.create(req.body, (err, CreatedSport) => {
        res.json(CreatedSport)
    })
})

router.put("/:id", (req, res) => {
    Sports.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedSport) => {
        res.json(updatedSport)
    })
})

router.delete("/:id", (req, res) => {
    Sports.findByIdAndRemove(req.params.id, (err, deletedSport) => {
        res.json(deletedSport)
    })
})


module.exports = router