/**
 * COURSES CONTROLLER
 * classcatalog/courses page.
 */
 
var Course = require('../../models/Course.js');

//pipes all Courses to the view
exports.index = function(req, res) {
  Course.find(function(err, docs){
    res.render('classcatalog/courses', { title: 'Courses', courses: docs });
  });
};


//display content for /classcatalog/createcourse
exports.create = function(req, res){
    Course.find(function(error, documents){
        res.render('classcatalog/createcourse', {title: 'Create Course', courses: documents});
    });
};

/**
 * POST classcatalog/createcourse
 * Create a new course offering
 */
exports.post = function(req, res, next) {
    var course = new Course(
        {
            name: req.body.name,
            department_code: req.body.department_code,
            course_code: req.body.course_code
        }
    );
    course.save(function(err) {
        if (err) {
            return next(err);
        }
        req.logIn(course, function(err) {
            if (err) {
                return next(err);
            }
            res.redirect('/classcatalog/courses');
        });
    });
};