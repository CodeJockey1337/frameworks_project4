/**
 * GET /
 * classcatalog/students page.
 */
var Student = require('../../models/Student.js');
 
exports.index = function(req, res) {
    Student.find(function(err, docs) {
    res.render('classcatalog/students', { title: 'Students', students: docs });
  });
};
//This method pipes the entire Students list to the view