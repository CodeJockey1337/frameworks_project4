/**
 * PROFESSORS CONTROLLER
 * classcatalog/professors page.
 */
var Professor = require('../../models/Professor.js');

//display content for /classcatalog/professors
exports.index = function(req, res) {
  Professor.find(function(err, docs) {
    res.render('classcatalog/professors', { title: 'Professors', professors: docs });
  });
};

//display content for /classcatalog/createprofessor
exports.create = function(req, res){
    Professor.find(function(error, documents){
        res.render('classcatalog/createprofessor', {title: 'Create Professor', professors: documents});
    });
};

/**
 * POST /createprofessor
 * Hire a new professor
 */
exports.post = function(req, res, next) {
    var professor = new Professor(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            department: req.body.department
        }
    );
    professor.save(function(err) {
        if (err) {
            return next(err);
        }
        req.logIn(professor, function(err) {
            if (err) {
                return next(err);
            }
            res.redirect('/classcatalog/professors');
        });
    });
};