var request = require('request');
var countries = require('country-data').countries;

countries.all.forEach(function(country) {
  var form = {
    name: country.name
  };

  request.post('http://localhost:3000/api/countries', {form: form},
  function(err, response, body) {
    console.log(body);
  })

});
