module.exports = function () {
  return 
  {
    "name": "example.com",
    "region": "sf1",
    "size": "512mb",
    "image": "centos-7-x64",
    "ssh_keys": "bitbucket",
    "backups": false,
    "ipv6": false,
    "user_data":  "#!/bin/bash" + "\n" +
                  "# Install base needed to run cookbooks" + "\n" +
                  "yum update -y;" + "\n" + 
                  "yum install -y epel-release;" + "\n" +
                  "yum install -y ruby wget unzip;" + "\n" +
                  "curl -L https://www.opscode.com/chef/install.sh | bash;" + "\n" +
                  "# Download and unpack the release" + "\n" +
                  "wget https://github.com/mea-ola/server-misc/archive/master.zip -O /tmp/chef.zip" + "\n" +
                  "unzip /tmp/chef.zip -d /tmp/install" + "\n" +
                  "# Run " + "\n" +
                  "cd /tmp/install/server-misc-master/server-deploy" + "\n" +
                  "chef-solo -c solo.rb -j node.json",
    "private_networking": true
  }
}