#!/bin/bash
# source /etc/profile >/dev/null 2>&1;
cd ../
npm run build
rm -rf docker/dist
mv  dist docker/dist
rm -rf dist

docker stop demonginx;
docker rm demonginx;
docker rmi demonginx:0.0.3;

cd docker;

docker build -t demonginx:0.0.3 .

docker run -itd -p 18881:80 --name demonginx -v ~/work/server/docker/:/docker demonginx:0.0.3; 
docker ps | grep "demonginx"
