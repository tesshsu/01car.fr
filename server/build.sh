#!/bin/bash -xe
# Author- Alexandre Chatiron

project_path=$(pwd)
laradock_path='/cygdrive/d/dev/websites/laradock'

app_path='/homez.1032/yvlrzew/api.1car.fr/'
server_address=ssh.cluster030.hosting.ovh.net
ssh_user=yvlrzew-vacha
php_path='/opt/plesk/php/7.3/bin/php'


#rm -rf target
#mkdir target

#cd ../front
#cp .env.prod .env
#
#npm run-script build
#
#cd build
#zip -r frontend.zip .
#
#mv frontend.zip ../../server/target/frontend.zip

#cd ..
#rm -rf build

# restore
#cp .env.dev .env

#backend
cd ../backend
cp .env.prod .env

zip -x 'public/storage' -x 'storage/app/public/files/*' -r backend.zip .

mv backend.zip ../server/target/backend.zip


# restore
cp .env.dev .env

#DB
cd ${laradock_path}

#docker-compose exec mysql bash -c "ls && mysqldump --user=root --password=root default > /docker-entrypoint-initdb.d/01car.sql"

#mv ${laradock_path}/mysql/docker-entrypoint-initdb.d/01car.sql ${project_path}/target/


# Install on server

cd ${project_path}

scp target/backend.zip ${ssh_user}@${server_address}:${app_path}


ssh -o StrictHostKeyChecking=no ${ssh_user}@${server_address}  "cd ${app_path} && \
    unzip backend.zip && \
    ${php_path} artisan migrate"


###    ${php_path} artisan migrate:fresh --seed  && \
###    ${php_path} artisan passport:client --personal"



Client ID: 1
Client secret: bYkIKLAolbjA7yhMZV1CP7CgqqHqUtiDB2bTip2j

