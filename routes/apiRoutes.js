const router = require("express").Router();
const db = require("../models");

router.get("/child", (req, res) => {
  db.Child.find({}).populate("reports")
    .then(dbchild => {
      res.json(dbchild);
    })
    .catch(err => {
      res.json(err);
    });
});

// router.put("/child/:id", ({ body, params }, res) => {
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


router.post("/child/:id", ({ body,params }, res) => {
  db.Child.create(body)
    .then(({ _id }) => {
      // console.log("ParentID",params)
      // console.log(_id)
      db.User.findByIdAndUpdate(params.id , { $push: { children: _id } }, { new: true })
      .then(dbchild => {
        res.json(dbchild);
      })
    })
    
    .catch(err => { console.log(err)
      res.json(err);
    });
});

// FIXME: Dynamically pass in a child id as a a parameter
router.delete("/child/:id", ({ body , params }, res) => {
  db.Child.findOneAndDelete(params.id , { $push: { children: _id } }, { new: true }) 
  .then(dbchild);
    
  })

    .catch(err => { console.log(err)
      res.json(err);
    })
    .catch(err => {
      res.json(err);
    });


// FIXME: Pass in the report ID to pull one report
router.get("/report", (req, res) => {
  db.Report.find({})
    .then(dbReport => {
      res.json(dbReport);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/report", ({ body }, res) => {
  db.Report.create(body)
    .then(dbreport => {
      res.json(dbreport);
    })
    .catch(err => {
      res.json(err);
    });
});

// FIXME: Delete route for a report
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
