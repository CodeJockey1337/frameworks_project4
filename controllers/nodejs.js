/**
 * GET /
 * Node.js page.
 */
exports.index = function(request, responce) {
  responce.render('nodejs', {
    title: 'Node.js'
  });
};