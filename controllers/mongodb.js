/**
 * GET /
 * Mongodb page.
 */
exports.index = function(req, res) {
  res.render('mongodb', {
    title: 'MongoDB'
  });
};