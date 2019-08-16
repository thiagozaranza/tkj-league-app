#!/bin/bash

cd /usr/share/nginx/html/${APP_FOLDER_NAME}/
rm -rf /usr/share/nginx/html/${APP_FOLDER_NAME}/node_modules
rm -rf /usr/share/nginx/html/${APP_FOLDER_NAME}/dist

npm install 

if [ $APP_ENV == "dev" ]
then
    echo -e "DEVELOPEMENT SERVER"
    echo -e "executing:  ng serve --host 0.0.0.0 \n"
    ng serve --host 0.0.0.0
elif [[ $BASE_HREF != "" ]]
then
    echo "executing: ng build --prod --base-href /${BASE_HREF}/" 
    ng build --prod --outputPath=dist/ --baseHref=/${BASE_HREF}/ 
else
    echo "executing: ng build --prod" 
    ng build --prod 
fi
