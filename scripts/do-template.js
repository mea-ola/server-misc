module.exports = function (name, node) {
  return {
      "name": name,
      "region": "sfo1",
      "size": "512mb",
      "image": "centos-7-0-x64",
      "ssh_keys": null,
      "backups": false,
      "ipv6": false,
      "user_data":  "#!/bin/bash" + "\n" +
                    "# Install base needed to run cookbooks" + "\n" +
                    "yum update -y;" + "\n" + 
                    "yum install -y epel-release;" + "\n" +
                    "yum install -y ruby wget unzip curl gcc mysql-devel ruby-devel rubygems;" + "\n" +
                    "gem install berkshelf;" + "\n" +
                    "curl -L https://www.opscode.com/chef/install.sh | bash;" + "\n" +
                    "# Download and unpack the release" + "\n" +
                    "wget https://github.com/mea-ola/server-misc/releases/download/v0.0.1/cookbooks.tar.gz -O /tmp/cookbooks.tar.gz" + "\n" +
                    "cd /tmp && tar xvf cookbooks.tar.gz" + "\n" +
                    "wget https://github.com/mea-ola/server-misc/archive/master.zip -O /tmp/chef.zip" + "\n" +
                    "unzip /tmp/chef.zip -d /tmp/install" + "\n" +
                    "# Run " + "\n" +
                    "cd /tmp/install/server-misc-master/server-deploy" + "\n" +
                    "chef-solo -c solo.rb -j " + node + ".json;" + "\n" +
                    "curl http://169.254.169.254/metadata/v1.json;",
      "private_networking": true
    }
}
