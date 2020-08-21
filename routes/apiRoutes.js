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

// Dynamically pass in a child id as a a parameter
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


// Pass in the report ID to pull one report
router.get("/report/:id", ({ body, params }, res) => {
  db.Report.find({})
    .then(dbreport => {
      res.json(dbreport);
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

// Delete route for a report
router.delete("/report/:id", ({ body, params }, res) => {
  db.Report.findOneAndDelete(params.id , { $push: { report: _id }  }, { new: true })
    .then(dbreport);
  })

    .catch(err => { console.log(err)
      res.json(err);
    })
    .catch(err => {
      res.json(err);
    });



module.exports = router;
