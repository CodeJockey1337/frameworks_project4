/**
 * GET /
 * classcatalog/professors page.
 */
exports.index = function(req, res) {
  res.render('classcatalog/professors', {
    title: 'Professors'
  });
};