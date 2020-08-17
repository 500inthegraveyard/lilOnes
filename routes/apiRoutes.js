const router = require("express").Router();
const db = require("../models");
const DailyRoutine = require("../models/dailyRoutine");
const ParentKid = require("../models/parentKid")

router.get("/dailyRoutine", ({body}, res) => {
  db.DailyRoutine .create(body)
  // .then(({_id}) => db.)
})



router.get("/Kid", (req, res) => {
 
  db.ParentKid.findOne({
    kid:
  })
    .then(recipes => res.json())
    .catch(err => res.status(422).end());
});


router.get("/parentKid", (req, res) => {

})


module.exports = router;
