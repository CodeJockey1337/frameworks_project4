// PROFESSORS MODEL

var mongoose = require('mongoose');

var professorSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  department: String,
  
}, { timestamps: true });

var Professor = mongoose.model('Professor', professorSchema);
module.exports = Professor;

Professor.create({ first_name: 'Steven', last_name: 'Beaty', department: 'CS' }, 
  function (err, small) {
    if (err) return handleError(err);
});

