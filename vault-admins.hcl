path "generic/config/*" {
  policy = "sudo"
}

path "secret/certs/swarm-master" {
  policy = "read"
}
