/**
 * GET /
 * Expressjs page.
 */
exports.index = function(req, res) {
  res.render('expressjs', {
    title: 'Express.js'
  });
};