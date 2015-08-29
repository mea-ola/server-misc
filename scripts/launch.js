var configs = require('./do-template'),
    droplet = require('dropletapi').Droplets
;

var launch = configs("gateway-two", "open-vpn-only-node");

launch.ssh_keys = ['ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCmbyCiDQljUhuExJjOhdYhry19EcMRAgGsBgbbMyZ9Y+5WC94rf9bP26HEPBsIrBaiVTdNAno4eI8oRsVz339/exsdmEwe5tS9Y2rxw4qHcA5gM+PmyfPZCCjBLL1aJ2lMWHz2Qo8pnFx2nZzYVd4F2mZK1bF22huRv69b4DJJ07iOWSbATaucjBQZZohjPa9BtJ54qFPXANb5Uxfb8zP2t+KhAo/86evU5iyrHUg5XP8EthFo12A0JNRKCpvRpcYc3WgrvZcRqZbpuVdbQv/vPR14FEXZH/08VbNHXMIJgv34NmmpJbjHvYISXbG9KsdPQZedvi4M9BMSa4dcG0CkD/CZ2L1RNZ03QwWFC1Bd58+1YPiP7harzEuD1trZGphLr/MGoeicsdxKR24RsctK3JkJRNP4NjI321XaCxoIFR0yNvTdof8rELu15sARGEAklBwf1762vTkTmRTruXLSnS0y9dy5qIFFaalIV4NGGOE7PqAV5HuDXMShATWvSzldSTHn/5luWH4OGpu+ec/BejJV+GVMgX0TbpXJ2Gx63zcDGCaC8xbs+QHUI5toewyJEL6TcQDSuw0jEpHKCsEvQPRDzkBRPLhxa4h0bCuHxPlEh5haf0PKY13NeJZlfUZvsVe3iOpNBGmZz0UK6eevM4oFZuB7NZn33Qqi7F1kOQ== meaola']

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
