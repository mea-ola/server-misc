bash 'add_mesosphere_repo' do
  code <<-EOF
  rpm -Uvh http://repos.mesosphere.com/el/6/noarch/RPMS/mesosphere-el-repo-6-2.noarch.rpm
EOF
end

yum_package ['mesos']
