/**
 * PROFESSORS CONTROLLER
 * classcatalog/professors page.
 */
var Professor = require('../../models/Professor.js');
 
exports.index = function(req, res) {
  Professor.find(function(err, docs) {
    res.render('classcatalog/professors', { title: 'Professors', professors: docs });
  });
};
