#!/bin/bash
# Author- Alexandre Chatiron

# Variables
DBPASSWD=root
PHP_POST_MAX_SIZE='100M'
PHP_UPLOAD_MAX_FILESIZE='100M'
PHP_VERSION=7.3
# Replace with the branch of Node.js or io.js you want to install: node_6.x, node_8.x, etc...
NODE_VERSION=node_10.x
DISTRO="$(lsb_release -s -c)"

# read env  config
ENV_FILE="$1"
HTTP_PROXY=
if [ -f "$ENV_FILE" ]; then
    echo -e "reading file $ENV_FILE"
    while IFS='=' read -r key value
    do
        key="ENV_"$(echo $key | tr '.' '_')
        eval ${key}=\${value}
    done <<< $(cat $ENV_FILE)

    HTTP_PROXY="${ENV_HTTP_PROXY}"
fi

echo -e "\n--- Setup proxy .. ---\n"

if [ -n "$HTTP_PROXY" ]; then
    echo "use proxy to ${HTTP_PROXY}"
    export http_proxy=${HTTP_PROXY}
    export https_proxy=${HTTP_PROXY}
    export ftp_proxy=${HTTP_PROXY}

    sudo sed -i "/.*use_proxy = .*/c use_proxy = on" /etc/wgetrc
    sudo sed -i "/.*http_proxy = .*/c http_proxy = $HTTP_PROXY" /etc/wgetrc
    sudo sed -i "/.*https_proxy = .*/c https_proxy = $HTTP_PROXY" /etc/wgetrc
    sudo sed -i "/.*ftp_proxy = .*/c ftp_proxy = $HTTP_PROXY" /etc/wgetrc
    sudo echo "Acquire::http::Proxy \"$HTTP_PROXY\";" | sudo tee /etc/apt/apt.conf

else
    echo "turn off proxy"
    sudo sed -i "/.*use_proxy = .*/c use_proxy = off" /etc/wgetrc

    unset http_proxy
    unset https_proxy
    unset ftp_proxy
fi    

sudo apt-get install -y --reinstall ca-certificates
sudo update-ca-certificates

echo -e "\n--- Installing now... ---\n"

# Updating repository

echo -e "\n--- Updating packages list ---\n"
sudo apt-get update -y 

# Installing Apache

echo -e "\n--- Installing Apache ---\n"
sudo apt-get install -y apache2

# set Vagrant folder as Apache root folder and go to it
echo -e "\n--- Setting document root to public directory ---\n"
if ! [ -L /var/www/html ]; then
  rm -rf /var/www/html
  ln -fs /vagrant /var/www/html
fi

# Installing apache modules
echo -e "\n--- Installing Apache modules : mod_rewrite ---\n"

sudo a2enmod rewrite

sudo a2enmod headers

# Installing MySQL and it's dependencies, Also, setting up root password for MySQL as it will prompt to enter the password during installation
echo -e "\n--- Install mariadb & phpmyadmin specific packages and settings ---\n"

sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password $DBPASSWD"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $DBPASSWD"

sudo apt-get install -y mysql-server

# Installing PHP and it's dependencies
echo -e "\n--- Install PHP and more---\n"


#Add  PHP 7.3 PPA repository
sudo apt-get -y install apt-transport-https lsb-release ca-certificates 
sudo wget --no-check-certificate -q -O- https://packages.sury.org/php/apt.gpg | sudo apt-key add -
sudo echo "deb [trusted=yes] https://packages.sury.org/php/ stretch main" | sudo tee /etc/apt/sources.list.d/php.list

sudo apt-get update -y 

sudo apt-get install -y \
    php${PHP_VERSION} \
    libapache2-mod-php${PHP_VERSION}  

# php7.-gd: module for handling graphics directly from PHP scripts. It supports the PNG, JPEG, XPM formats as well as Freetype/ttf fonts. 
sudo apt-get install -y \
    php${PHP_VERSION}-gd \
    php${PHP_VERSION}-mysqlnd    \
    php-soap                     \
    php${PHP_VERSION}-xdebug     \
    php${PHP_VERSION}-intl       

echo -e "\n--- Install PHP extensions ---\n"
sudo apt-get install -y \
    php${PHP_VERSION}-cli        \
	php${PHP_VERSION}-common     \
    php${PHP_VERSION}-fpm        \
    php${PHP_VERSION}-json       \
    php${PHP_VERSION}-pdo        \
    php${PHP_VERSION}-mysql      \
    php${PHP_VERSION}-zip        \
    php${PHP_VERSION}-mbstring   \
	php${PHP_VERSION}-gettext    \
    php${PHP_VERSION}-xml        \
    php${PHP_VERSION}-simplexml     \
	php${PHP_VERSION}-xmlreader     \
    php${PHP_VERSION}-bcmath     \
	php${PHP_VERSION}-dom     \
	php${PHP_VERSION}-exif     \
	php${PHP_VERSION}-ftp     \
	php${PHP_VERSION}-iconv     \
	php${PHP_VERSION}-imagick     \
	php${PHP_VERSION}-posix     \
	php${PHP_VERSION}-sockets     \
	php${PHP_VERSION}-tokenizer \   
    php${PHP_VERSION}-sqlite

# curl
sudo apt-get install -y \
    curl                \
    php${PHP_VERSION}-curl 

# Configure PHP
echo -e "\n--- Configure PHP ---\n"
sudo sed -i "/post_max_size = .*/c post_max_size = $PHP_POST_MAX_SIZE" /etc/php/${PHP_VERSION}/apache2/php.ini
sudo sed -i "/upload_max_filesize = .*/c upload_max_filesize = $PHP_UPLOAD_MAX_FILESIZE" /etc/php/${PHP_VERSION}/apache2/php.ini

sudo a2dismod php7.0
sudo a2enmod php7.3

# Installing phpmyadmin 
echo -e "\n--- Install phpmyadmin specific packages and settings ---\n"

sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/dbconfig-install boolean true"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/app-password-confirm password $DBPASSWD"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/admin-pass password $DBPASSWD"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/app-pass password $DBPASSWD"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/reconfigure-webserver multiselect none"

sudo apt-get install -y phpmyadmin 

# Make phpmyadmin available
ln -s /etc/phpmyadmin/apache.conf /etc/apache2/sites-enabled/phpmyadmin.conf

# Update apache config
echo -e "\n--- Configure Apache ---\n"
cat /vagrant/server/config/default.conf | tee /etc/apache2/sites-available/000-default.conf


# Restarting 
echo -e "\n--- Restarting Apache ---\n"
sudo service apache2 restart

sudo service mysql restart


# Installing Node.js

# Remove the old PPA if it exists
# add-apt-repository may not be present on some Ubuntu releases:
# sudo apt-get install python-software-properties
sudo add-apt-repository -y -r ppa:chris-lea/node.js
sudo rm -f /etc/apt/sources.list.d/chris-lea-node_js-*.list
sudo rm -f /etc/apt/sources.list.d/chris-lea-node_js-*.list.save

# 2. Add the NodeSource package signing key
# wget can also be used:
wget --quiet -O - https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -


# The below command will set this correctly, but if lsb_release isn't available, you can set it manually:
# - For Debian distributions: jessie, sid, etc...
# - For Ubuntu distributions: xenial, bionic, etc...
# - For Debian or Ubuntu derived distributions your best option is to use the codename corresponding to the upstream release your distribution is based off. This is an advanced scenario and unsupported if your distribution is not listed as supported per earlier in this README.

echo "deb https://deb.nodesource.com/$NODE_VERSION $DISTRO main" | sudo tee /etc/apt/sources.list.d/nodesource.list
echo "deb-src https://deb.nodesource.com/$NODE_VERSION $DISTRO main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list

sudo apt-get update
sudo apt-get install -y nodejs

# install 
sudo apt-get install -y build-essential

# install laravel tools
echo -e "\n--- Install laravel tools ---\n"
/vagrant/tools/composer.phar global require laravel/installer

export PATH=/home/vagrant/.config/composer/vendor/bin:$PATH


