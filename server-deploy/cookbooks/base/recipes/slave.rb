cookbook_file '/usr/lib/systemd/system/mesos-slave.service' do
  source 'mesos-slave.service'
  action :create
  mode '0644'
end