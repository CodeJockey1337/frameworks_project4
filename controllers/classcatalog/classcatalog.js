/**
 * GET /
 * classcatalog page.
 */
exports.index = function(req, res) {
  res.render('classcatalog', {
    title: 'Class Catalog DB'
  });
};