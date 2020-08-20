const router = require("express").Router();
const db = require("../models");

const Report = require("../models/Report");
const Parent = require("../models/Parent");
const Child = require("../models/Child");
const PassportUser = require("../models/PassportUser");


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
  db.Child.findOne(body)
    .then(({ _id }) => {
      // console.log("ParentID",params)
      // console.log(_id)
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
  db.Child.create(body)
    .then(({ _id }) => {
      // console.log("ParentID",params)
      // console.log(_id)
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



module.exports = router;
