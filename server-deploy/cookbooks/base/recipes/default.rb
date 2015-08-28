# Hostname hack until stable dns comes to our datacenter
file '/etc/hostname' do
  content node[:network][:interfaces][:eth1][:addresses].detect{|k,v| v[:family] == "inet" }.first
  owner 'root'
  group 'root'
  mode '0644'
end
