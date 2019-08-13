FROM openjdk:8

ARG JAR_NAME
ARG JAR_PATH

COPY $JAR_PATH /usr/src/app/

WORKDIR /usr/src/app

CMD java -jar /usr/src/app/$JAR_NAME
