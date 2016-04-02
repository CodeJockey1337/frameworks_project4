/**
 * GET /
 * classcatalog/students page.
 */
exports.index = function(req, res) {
  res.render('classcatalog/students', {
    title: 'Students'
  });
};