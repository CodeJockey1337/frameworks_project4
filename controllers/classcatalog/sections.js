/**
 * SECTIONS CONTROLLER
 * classcatalog/sections page.
 */
 
 var Section = require('../../models/Section.js');
 
exports.index = function(req, res) {
  Section.find(function(err, docs) {
    res.render('classcatalog/sections', { title: 'Sections', sections : docs });
  });
};

exports.create = function(req, res){
    Section.find(function(error, documents){
        res.render('classcatalog/createsection', {title: 'Create Section', sections : documents});
    });
};