Vagrant.configure("2") do |config|

  config.vm.box = "debian/contrib-stretch64"
    
  # Share current folder in order to access config file
  config.vm.synced_folder ".", "/vagrant", type: "virtualbox", group: "www-data", owner: "www-data"
  

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
     # Display the VirtualBox GUI when booting the machine
     vb.gui = true
  
     # Customize the amount of memory on the VM:
     # vb.memory = "1024"
  end
     
  # Begin Configuring
  config.vm.define "lamp" do|lamp|
    # Setting up hostname
    lamp.vm.hostname = "lamp"
    # Setting up machine's IP Address
    lamp.vm.network "private_network", ip: "192.168.205.10"
    # Provisioning with script.sh
    lamp.vm.provision "shell" do |s|
        s.inline = "/bin/bash /vagrant/server/script.sh $1"
        s.args   = "/vagrant/server/.env"
    end
  end 
  
end
