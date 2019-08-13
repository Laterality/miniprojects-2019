# Download docer-compose.yml, nginx configuration and static resources
if [ $1 == "production" ]; then
    git clone https://github.com/everyone-driven-development/miniprojects-2019 -b master --single-branch
    wget -O - https://raw.githubusercontent.com/everyone-driven-development/miniprojects-2019/master/docker-compose.yml > docker-compose.yml
    wget -O - https://raw.githubusercontent.com/everyone-driven-development/miniprojects-2019/master/scripts/nginx.conf > nginx.conf
elif [ $1 == "develop" ]; then
    git clone https://github.com/everyone-driven-development/miniprojects-2019 -b develop --single-branch
    wget -O - https://raw.githubusercontent.com/everyone-driven-development/miniprojects-2019/devlop/docker-compose.yml > docker-compose.yml
    wget -O - https://raw.githubusercontent.com/everyone-driven-development/miniprojects-2019/develop/scripts/nginx.conf > nginx.conf
else
    echo 'Argument [production, develop] is required'
fi

sudo snap install docker

rm -rf backend

sudo docker-compose up -d
