### INSTRUCTIONS

##### Local Docker Build
- $ sudo docker build -t expressjs .
- $ sudo docker run -d -p 8080:8080 expressjs

http://localhost:8080/ping

##### Dockerhub Build
- docker pull mohsinkhalid/expressjs 
- docker run -p 3000:80 -d mohsinkhalid/expressjs

http://localhost:8080/ping

