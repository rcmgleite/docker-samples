var fs = require('fs');

fs.appendFile('foo.txt', 'Append data!!!', function(error) {
  if (error) {
    console.log('Error:- ' + error);
    throw error;
  }
  console.log("data appended!!");
});
