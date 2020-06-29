#!/bin/bash
# source /etc/profile >/dev/null 2>&1;

echo '---------'
echo $0;
echo $1;
pwd;
echo '发布开始';
if [ $1 ];then 
    export NODE_PROJECT_NAME=$1
fi; 



if [ ! -f "src/config/index-${NODE_PROJECT_NAME}.js" ];then 
    echo "src/config/index-${NODE_PROJECT_NAME}.js 文件不存在"; 
else
    cp -f "src/config/index.js" "src/config/index-tmp.js"; 
    cp -f "src/config/index-${NODE_PROJECT_NAME}.js" "src/config/index.js"; 
    echo "src/config/index-${NODE_PROJECT_NAME}.js"; 
fi;

npm run deploypush;

if [ ! -f "src/config/index-tmp.js" ];then 
    echo "src/config/index-tmp.js 文件不存在"; 
else
    cp -f "src/config/index-tmp.js" "src/config/index.js"; 
    rm -f "src/config/index-tmp.js"; 
    echo "还原 src/config/index.js"; 
fi;


