#!/bin/bash
# Author- Alexandre Chatiron

rm -rf target
mkdir target

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

#zip -r backend.zip .

mv backend.zip ../server/target/backend.zip


# restore
cp .env.dev .env

#DB
cd ../server

docker-compose exec --user=laradock mysql bash

mysqldump --user=root --password=root default > target/01car.sql

51.210.190.6
admin01car_ssh
B9h5nZUwc6mmnw4caLB4

ssh admin01car_ssh@51.210.190.6
