![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

<!-- LINKS -->
<!-- Replace the link for each in brackets below -->
<!-- PR (working into submission) -->
[1]: https://github.com/401-advanced-javascript-billybunn/lab-17/pull/1
<!-- travis build -->
[2]: https://travis-ci.com/401-advanced-javascript-billybunn/lab-16/builds/107566238
<!-- back-end -->
[3]: http://xyz.com
<!-- front-end -->
[4]: http://xyz.com
<!-- swagger -->
[5]: http://xyz.com
<!-- jsdoc-->
[6]: heroku-link/docs 

## TCP Server / Message Application
[![Build Status](https://travis-ci.com/401-advanced-javascript-billybunn/lab-17.svg?branch=working)](https://travis-ci.com/401-advanced-javascript-billybunn/lab-17)

### Author: Billy Bunn

### Links and Resources
* [PR][1]
* [travis][2]
<!-- (when applicable) -->
<!-- * [back-end][3] -->
<!-- (when applicable) -->
<!-- * [front-end][4] -->

<!-- #### Documentation -->
<!-- API assignments only -->
<!-- * [swagger][5] -->
<!-- (All assignments) -->
<!-- * [jsdoc][6] -->

### Modules
#### `app.js`
Socket that makes a TCP connection with `server.js` on port 3001. 
###### `alterFile(file)`
Calls a series of functions to read a file, convert the content to all uppercase characters, and re-write the file with the new content. Emits an event upon completing the process or a different event if an error occurs.

###### `read(file) -> fs.readFile(file) as Promise`
Calls the promisify-ed `fs.readFile` function. Takes a filepath to read as a parameter, ultimately returns a buffer of the data in that file.

###### `uppercase(data) -> Buffer of data in uppercase characters`
Takes buffer data as a parameter, returns a buffer of the same content in uppercase characters.

###### `write(file, contents) -> fs.writeFile(file, contents) as Promise`
Calls the promisify-ed `fs.writeFile` function. Takes a filepath and buffer data as parameters, ultimately writes new file with the filepath of `file` with the `contents`.

#### `server.js`
The TCP server. Accepts connections from sockets on port 3001.
###### `dispatchEvent(json) -> broadcasts the payload of allowed events to all sockets`

#### `logger.js`

### Setup
<!-- #### `.env` requirements -->
* `npm i` - install dependencies
<!-- * `PORT` - assign a port number -->
<!-- * `MONGODB_URI` - URL to the running mongo instance/db -->


#### Running the app
<!-- * `npm start` -->
* `npm node app.js dummy.txt`

<!-- * Endpoint: `/` -->
<!-- * Endpoint: `/foo/bar/` -->
  <!-- * Returns a JSON object with abc in it. -->
<!-- * Endpoint: `/bing/zing/` -->
  <!-- * Returns a JSON object with xyz in it. -->
  
#### Tests
* To run tests, enter the following in the CLI:
  * `npm run test`
  * `npm run lint`
<!-- * What assertions were made? -->
<!-- * What assertions need to be / should be made? -->

#### UML
##### Final Diagram
![UML Diagram 1](https://i.imgur.com/BZvYdbD.jpg)
---
##### Lecture Diagram
![UML Diagram 2](https://i.imgur.com/JWXXXMh.jpg)
