# Download docer-compose.yml, nginx configuration and static resources

mkdir app
cd app

if [ $1 == "production" ]; then
    wget -O - https://raw.githubusercontent.com/everyone-driven-development/miniprojects-2019/master/docker-compose-production.yml > docker-compose.yml
elif [ $1 == "develop" ]; then
    wget -O - https://raw.githubusercontent.com/everyone-driven-development/miniprojects-2019/devlop/docker-compose-dev.yml > docker-compose.yml
else
    echo 'Argument [production, develop] is required'
fi

sudo snap install docker

sudo docker-compose up -d
