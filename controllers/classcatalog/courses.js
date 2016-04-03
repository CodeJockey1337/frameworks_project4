/**
 * COURSES CONTROLLER
 * classcatalog/courses page.
 */
 
var Course = require('../../models/Course.js');

exports.index = function(req, res) {
  Course.find(function(err, docs){
    res.render('classcatalog/courses', { title: 'Courses', courses: docs });
  });
};
//pipes all Courses to the view