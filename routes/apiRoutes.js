const router = require("express").Router();
const db = require("../models");

router.get("/child", (req, res) => {
  console.log("*************************************");
  db.Child.find({})
    .populate("reports")
    .then((dbchild) => {
      res.json(dbchild);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/child/:id", ({ body, params }, res) => {
  db.Child.create(body)
    .then(({ _id }) => {
      // console.log("ParentID",params)
      // console.log(_id)
      db.User.findByIdAndUpdate(
        params.id,
        { $push: { children: _id } },
        { new: true }
      ).then((dbchild) => {
        res.json(dbchild);
      });
    })

    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// FIXME: Dynamically pass in a child id as a a parameter
router.delete("/child", ({ body }, res) => {
  db.Child.findOneAndDelete({ name: "Timmy" }, function (err) {
    if (err) console.log(err);
  })

    .then((dbchild) => {
      res.json(dbchild);
    })
    .catch((err) => {
      res.json(err);
    });
});

// FIXME: Pass in the report ID to pull one report
router.get("/report", (req, res) => {
  db.Report.find({})
    .then((dbReport) => {
      res.json(dbReport);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/report/:id", ({ body }, res) => {
  console.log("ACTIVITIES: ", body.activities);
  db.Report.create({
    // activites: [...body.activities],
    activities: body.activities,
    note: body.note,
  })
    .then((dbreport) => {
      res.json(dbreport);
    })
    .catch((err) => {
      res.json(err);
    });
});


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
