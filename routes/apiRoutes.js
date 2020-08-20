const router = require("express").Router();
const db = require("../models");

const Report = require("../models/Report");
const Parent = require("../models/Parent");
const Child = require("../models/Child");

router.get("/child", (req, res) => {
  db.Child.find({}).populate("Reports")
    .then(dbchild => {
      res.json(dbchild);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/child/:id", ({ body, params }, res) => {
  console.log("Child.put")
  db.Child.findOne(body)
    .then(({ _id }) => {
      console.log("ParentID",params)
      console.log(_id)
      db.Parent.findByIdAndUpdate(params.id , { $push: { children: _id } }, { new: true })
      .then(dbchild => {
        res.json(dbchild);
      })
    })
    
    .catch(err => { console.log(err)
      res.json(err);
    });
});


router.post("/child/:id", ({ body,params }, res) => {
  console.log("Child.create")
  db.Child.create(body)
    .then(({ _id }) => {
      console.log("ParentID",params)
      console.log(_id)
      db.Employee.findByIdAndUpdate(params.id , { $push: { children: _id } }, { new: true })
      .then(dbchild => {
        res.json(dbchild);
      })
    })
    
    .catch(err => { console.log(err)
      res.json(err);
    });
});

router.delete("/child", ({ body }, res) => {
  db.Child.findOneAndDelete({ name: 'Timmy' }, function (err) {
    if (err) console.log(err);
  })

    .then(dbchild => {
      res.json(dbchild);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/parent", ({ body }, res) => {
  db.Parent.create(body)
    .then(dbparent => {
      res.json(dbparent);
    })
    .catch(err => {
      res.json(err);
    });
});



// 2
// 3
// 4
// ProductModel.findOneAndDelete({ brand: 'Nike' }, function (err) {
//   if(err) console.log(err);
//   console.log("Successful deletion");
// });




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

router.delete("/report", ({ body }, res) => {
  db.Report.findOneAndDelete({ Food: 'Chicken' }, function (err) {
    if (err) console.log(err);
  })

    .then(dbReport => {
      res.json(dbReport);
    })
    .catch(err => {
      res.json(err);
    });
});


// router.findOne("/child", (req, res) => {
//     db.Report.find({})
//     .then(dbReport => {
//       res.json(dbReport);
//     })
//     .catch(err => {
//       res.json(err);
//     });
//   });


// router.get("/Report", ({body}, res) => {
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
