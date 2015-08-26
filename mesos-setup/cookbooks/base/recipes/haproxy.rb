yum_package ['haproxy']

cookbook_file '/usr/bin/haproxy-marathon-bridge' do
  source 'haproxy-marathon-bridge'
  action :create
  mode '0776'
end

cookbook_file '/usr/lib/systemd/system/reload-haproxy.service' do
  source 'reload-haproxy.service'
  action :create
  mode '0644'
end

cookbook_file '/usr/lib/systemd/system/reload-haproxy.timer' do
  source 'reload-haproxy.timer'
  action :create
  mode '0644'
end

template '/usr/bin/update-haproxy-config' do
  source 'update-haproxy-config.erb'
  owner 'root'
  group 'root'
  mode '0776'
  action :create
end