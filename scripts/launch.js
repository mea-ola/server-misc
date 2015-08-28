var configs = require('./do-template'),
    droplet = require('dropletapi').Droplets
;

var launch = configs("test-server-consul", "consul-only-node");
var token = process.env.DOTOKEN;

console.log(launch);

var digitalOcean = new droplet(token);
digitalOcean.createDroplet(launch, function (error, result) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(result);
  }
});
