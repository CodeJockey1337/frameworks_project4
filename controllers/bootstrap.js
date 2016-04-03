/**
 * GET /
 * Bootstrap CSS page.
 */
exports.index = function(request, responce) {
  responce.render('bootstrap', {
    title: 'Bootstrap CSS'
  });
};