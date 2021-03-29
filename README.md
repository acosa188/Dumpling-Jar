# Dumpling Jar
Dumpling jar is a node js application that spawns dumpling in a jar in real-time when there is a new twitch follower. It utilizes Streamlab's WebSocket to get real-time twitch events.


## Requirements
- [Nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)


## How to install
- The user needs to create a .env file with a variable name SOCKET_API. e.g.
```
SOCKET_API=dsnajsdahskjdahsuak....
```
- After adding the environment file. Copy and paste the following command in the command line.
```
npm install
```
```
npm start
```
- On your browser, type http://localhost:8080

## How to get SOCKET_API key
- Create a [streamlabs](https://streamlabs.com/) account or login.
- Follow this [guide](https://dev.streamlabs.com/docs/obtain-an-access_token) to obtain an access key.