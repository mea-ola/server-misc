bash 'add_mesosphere_repo' do
  code <<-EOF
  rpm -Uvh http://repos.mesosphere.com/el/6/noarch/RPMS/mesosphere-el-repo-6-2.noarch.rpm
EOF
end

yum_package ['docker', 'mesos']

cookbook_file '/usr/lib/systemd/system/mesos-slave.service' do
  source 'mesos-slave.service'
  action :create
  mode '0644'
end

cookbook_file '/etc/mesos-slave/containerizers' do
  source 'containerizers'
  action :create
  mode '0644'
end

template '/etc/mesos/zk' do
  source 'zk.erb'
  owner 'root'
  group 'root'
  mode '0644'
  action :create
end

file '/etc/mesos-slave/ip' do
  content node[:network][:interfaces][:eth1][:addresses].detect{|k,v| v[:family] == "inet" }.first
  owner 'root'
  group 'root'
  mode '0644'
end
