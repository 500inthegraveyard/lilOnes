let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/dbLilOnes", {
  useNewUrlParser: true,
  useFindAndModify: false
});



db.Employee.create({})
.then(() => db.Employee.insertMany(employeeSeed))
.then(data => {
  console.log(data, " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});








// let routineSeed = [
//   {
//     day: new Date().setDate(new Date().getDate()-10),
//     routines: [
//       {
//         meals: "Chicken Nuggets, cheese stick",
//         behavior: "Poor, had a large temper",
//         activities: "Ice Skating and four square",
//         message: "snow storm, come pickup early",
//         nap:3,
//         diapers:2,
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-9),
//     routines: [
//       {
//         meals: "Steak",
//         behavior: "Amazing",
//         activities: "Basketball",
//         message: "No daycare tomorrow",
//         nap:9,
//         diapers:6,
//       }
//     ]
//   },
  
// ];


// db.DailyRoutine.deleteMany({})
//   .then(() => db.DailyRoutine.collection.insertMany(routineSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
  

//   let parentKidSeed = [{

//     ParentName: "Dad",
      
//       kid:[{
//       kidName: "Billy",
//       photo: "photoimage",
      
//     }],
  
//     ParentName: "Mom",
      
//       kid:[{
//       kidName: "Hannah",
//       photo: "photoimage",
      
//     }]
  
//   }];
  
  
  
  

  
