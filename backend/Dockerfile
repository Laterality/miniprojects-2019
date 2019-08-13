FROM openjdk:8

RUN JAR_NAME = edd-0.0.1-SNAPSHOT

COPY ./build/libs/${JAR_NAME} /usr/src/app/

WORKDIR /usr/src/app

CMD java -jar /usr/src/app/${JAR_NAME}
