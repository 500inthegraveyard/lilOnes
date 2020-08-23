"use strict";

var mongoose = require("mongoose");

var db = require("../models"); // mongoose.connect("mongodb://localhost/dbLilOnes", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });


db.PassportUser.create({}).then(function () {
  return db.PassportUser.insertMany(userSeed);
}).then(function (data) {
  console.log(data, " records inserted!");
  process.exit(0);
})["catch"](function (err) {
  console.error(err);
  process.exit(1);
}); // db.Child.create({})
// .then(() => db.Child.insertMany(childSeed))
// .then(data => {
//   console.log(data, " records inserted!");
//   process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });
// db.Employee.create({})
// .then(() => db.Employee.insertMany(employeeSeed))
// .then(data => {
//   console.log(data, " records inserted!");
//   process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });
// db.Parent.create({})
// .then(() => db.Parent.insertMany(parentSeed))
// .then(data => {
//   console.log(data, " records inserted!");
//   process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });
// db.Report.create({})
// .then(() => db.Report.insertMany(reportSeed))
// .then(data => {
//   console.log(data, " records inserted!");
//   process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });
// let parentSeed = [{
//   name: "Bill",
//   last: "Tompson",
//   email: "bill@gmail.com",
//   password: "1234abc",
//   child: [
//     {
//       type: Schema.Types.ObjectId,
//       ref:"Child"
//     }
//   ]
// }];