// PROFESSORS MODEL

var mongoose = require('mongoose');

var professorSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  department: String,
  
}, { timestamps: true });

var Professor = mongoose.model('Professor', professorSchema);
module.exports = Professor;

//SEEDS
Professor.create(
  { 
    first_name: 'Steven', 
    last_name: 'Beaty', 
    department: 'CS'
  },
  {
    first_name: 'Aaron',
    last_name: 'Gordon',
    department: 'CS'
  },
  {
    first_name: 'Jerry',
    last_name: 'Shultz',
    department: 'CS'
  },
  {
    first_name: 'Patricia',
    last_name: 'Tucker',
    department: 'CS'
  },
  {
    first_name: 'Ilya',
    last_name: 'Georgiev',
    department: 'CS'
  },
  {
    first_name: 'Jody',
    last_name: 'Paul',
    department: 'CS'
  },
  {
    first_name: 'Judy',
    last_name: 'Gurka',
    department: 'CS'
  }
);
