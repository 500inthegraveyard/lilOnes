"use strict";

var router = require("express").Router();

var db = require("../models");

router.get("/child", function (req, res) {
  console.log("*************************************");
  db.Child.find({}).populate("reports").then(function (dbchild) {
    res.json(dbchild);
  })["catch"](function (err) {
    res.json(err);
  });
}); // router.put("/child/:id", ({ body, params }, res) => {
//   db.Child.findOne(body)
//     .then(({ _id }) => {
//       // console.log("ParentID",params)
//       // console.log(_id)
//       db.User.findByIdAndUpdate(params.id , { $push: { children: _id } }, { new: true })
//       .then(dbchild => {
//         res.json(dbchild);
//       })
//     })
//     .catch(err => { console.log(err)
//       res.json(err);
//     });
// });

router.post("/child/:id", function (_ref, res) {
  var body = _ref.body,
      params = _ref.params;
  db.Child.create(body).then(function (_ref2) {
    var _id = _ref2._id;
    // console.log("ParentID",params)
    // console.log(_id)
    db.User.findByIdAndUpdate(params.id, {
      $push: {
        children: _id
      }
    }, {
      "new": true
    }).then(function (dbchild) {
      res.json(dbchild);
    });
  })["catch"](function (err) {
    console.log(err);
    res.json(err);
  });
}); // FIXME: Dynamically pass in a child id as a a parameter

router["delete"]("/child", function (_ref3, res) {
  var body = _ref3.body;
  db.Child.findOneAndDelete({
    name: "Timmy"
  }, function (err) {
    if (err) console.log(err);
  }).then(function (dbchild) {
    res.json(dbchild);
  })["catch"](function (err) {
    res.json(err);
  });
}); // FIXME: Pass in the report ID to pull one report

router.get("/report", function (req, res) {
  db.Report.find({}).then(function (dbReport) {
    res.json(dbReport);
  })["catch"](function (err) {
    res.json(err);
  });
});
router.post("/report/:id", function (_ref4, res) {
  var body = _ref4.body;
  console.log("ACTIVITIES: ", body.activities);
  db.Report.create({
    // activites: [...body.activities],
    activities: body.activities,
    note: body.note
  }).then(function (dbreport) {
    res.json(dbreport);
  })["catch"](function (err) {
    res.json(err);
  });
}); // FIXME: Delete route for a report
// router.delete("/report", ({ body }, res) => {
//   db.Report.findOneAndDelete({ Food: 'Chicken' }, function (err) {
//     if (err) console.log(err);
//   })
//     .then(dbReport => {
//       res.json(dbReport);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

module.exports = router;