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

# Enable the servies (TODO: look at systemd chef recipes)
bash 'enable_services' do
  code <<-EOF
  systemctl enable /usr/lib/systemd/system/reload-haproxy.*
EOF
end

service 'haproxy' do 
  provider Chef::Provider::Service::Systemd
  action [:start]
end

service 'reload-haproxy.timer' do 
  provider Chef::Provider::Service::Systemd
  action [:enable, :start]
end
