const express = require("express");
const router = express.Router()

//Mock Profile data..
const mockProfile = {
    name: "Bootcamp",
    endorsedCount: 600
}

// GET  /api/profile
router.get("/", (req, res) => {
    res.json(mockProfile)
})


//POST 
router.post("/", (req, res) => {
    const newProfile = req.body;
    newProfile.id = "465416541adfsf";
    res.json(newProfile)
})

module.exports = router;