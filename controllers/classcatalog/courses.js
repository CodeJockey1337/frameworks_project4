/**
 * GET /
 * classcatalog/courses page.
 */
exports.index = function(req, res) {
  res.render('classcatalog/courses', {
    title: 'Courses'
  });
};