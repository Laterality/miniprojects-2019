FROM openjdk:8

ENV JAR_NAME edd-0.0.1-SNAPSHOT.jar

COPY $(find . -name $JAR_NAME)/$JAR_NAME /usr/src/app/

WORKDIR /usr/src/app

CMD java -jar /usr/src/app/$JAR_NAME
