const router = require("express").Router();
const db = require("../models");

const Report = require("../models/Report");
const Parent = require("../models/Parent");
const Child = require("../models/child");










// router.get("/Child", ({body}, res) => {
//   db.Child .create(body)
//   // .then(({_id}) => db.)
// });



// // router.get("/Child", (req, res) => {
 
// //   db.Child.find({
// //     Child:
// //   })
// //     .then(lilOines => res.json())
// //     .catch(err => res.status(422).end());
// // });
// router.get("/Child", (req, res) => {
//   db.Child.find({})
//     .then(Child => {
//       res.json(Child);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


// router.get("/Child", (req, res) => {

// })


module.exports = router;
