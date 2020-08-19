const router = require("express").Router();
const db = require("../models");

const Report = require("../models/Report");
const Parent = require("../models/Parent");
const Child = require("../models/Child");

router.get("/child", (req, res) => {
  db.Child.find({})
  .then(dbchild => {
    res.json(dbchild);
  })
  .catch(err => {
    res.json(err);
  });
});
 
router.post("/child", ({body}, res) => {
  db.Child.create(body)
    .then(dbchild => {
      res.json(dbchild);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/child", ({body}, res) => {
  db.Child.findOneAndDelete({name: 'Timmy'}, function (err) {
      if(err) console.log(err);
  })
    
    .then(dbchild => {
      res.json(dbchild);
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
   
  router.post("/report", ({body}, res) => {
    db.Report.create(body)
      .then(dbreport => {
        res.json(dbreport);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.delete("/report", ({body}, res) => {
    db.Report.findOneAndDelete({name: 'Timmy'}, function (err) {
        if(err) console.log(err);
    })
      
      .then(dbReport => {
        res.json(dbReport);
      })
      .catch(err => {
        res.json(err);
      });
  });
  


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
