/**
 * GET /
 * classcatalog/sections page.
 */
exports.index = function(req, res) {
  res.render('classcatalog/sections', {
    title: 'Sections'
  });
};