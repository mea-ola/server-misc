var configs = require('./do-template'),
    droplet = require('dropletapi').Droplets
;

var launch = configs("gateway-two", "open-vpn-only-node");

launch.ssh_keys = ['41:7d:0c:3e:fe:4e:15:9f:88:6f:47:c7:4b:98:1c:f7']

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
