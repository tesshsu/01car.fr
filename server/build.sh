#!/bin/bash
# Author- Alexandre Chatiron

rm -rf target
mkdir target

cd ../frontend
cp .env.prod .env

npm run-script build

cd build
zip -r frontend.zip .

mv frontend.zip ../../server/target/frontend.zip

cd ..
rm -rf build

# restore
cp .env.dev .env

#backend
cd ../backend
cp .env.prod .env

zip -r backend.zip .

mv backend.zip ../server/target/backend.zip


# restore
cp .env.dev .env

#DB
cd ../server
sudo mysqldump -u root biandang > target/biandang.sql