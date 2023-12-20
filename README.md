# todoserver
# node-js
==> mern stack 
{  m=mogodb (database), e=express(library), r=react(front-end library), n=node (run time envinronment)}

3 tire architecture =>
>> web browser(react) 
>> server(express,node)
>> data base (mongodb)

all about node js node:
>>link :
-- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status 
above link is use for http status code description

--https://www.npmjs.com/ 
this link is use for npm packages where we can have different packages for ex-nodemon


>>npm: node package manager

commands:
>> npm init: for intalling the node package 
>>nodemon :npm i nodemon (where i stand for install)
//nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

>> npm i/npm install :
when we ignored file then send to other to run for that person must use this command and get the ignore file in the package of json .

>>Package.json: This is a metadata file that contains information about the package, such as its name, version, dependencies, scripts, author details, and more. It's a crucial file for managing Node.js projects.

>> for running  code in offline -
// http://localhost:8081
>> for running code in online -
// node filename.js (ex-node server.js)//in the terminal 
>> for running after that nodeman install -
// node run filename.js (// firstly in package.json we have script part in that we can change the name that you want to run the file.
   example(//"dev"= "node filename.js")

http method:
>>GET:geeting data from server ()
>>POST:sending data to server 
>>DELETE:deleting data from the server 
>>PATCH:updating certain fields 
>>PUT:full update 

//we can run only the get method in the chrome for remaning method to run we can use diffirent kind of path//
neither 
>>postman appliction (software)
nor
>>thander client (vs code extension//)



--method/function in node js:
>>require :
>> create server: createServer() is a function in JavaScript that is commonly used in server-side programming, particularly in Node.js, to create an HTTP server. This function is part of the Node.js http module.
servr has two diffrent things(request and response)

>>Request Object (in short-request is something that we send to the server )
The request object (req) in Node.js represents the HTTP request made by a client to the server. It contains information about the incoming request, including details like URL, request method, headers, query parameters, request body (for POST, PUT, PATCH requests), route parameters, cookies, and more.

>>Common properties/methods of the request object include:
req.url: Represents the URL of the incoming request.
req.method: Indicates the HTTP method used (e.g., GET, POST, PUT, DELETE).
req.headers: Contains the headers sent with the request.
req.params: Contains route parameters extracted from the URL pattern.
req.query: Contains query parameters parsed from the URL.
req.body: Contains the body of the request (for POST, PUT, PATCH requests).
req.cookies: Contains cookies sent by the client.

>>Response Object (in short response is something that we can get from the server)
The response object (res) in Node.js represents the HTTP response that the server sends back to the client. It includes methods and properties to manipulate and send data back to the client, such as setting headers, sending status codes, sending data in various formats (JSON, HTML, text, etc.), and more.

Common properties/methods of the response object include:

res.status(code): Sets the HTTP status code for the response.
res.send(data): Sends a response to the client with data (can be JSON, HTML, text, etc.).
res.json(data): Sends a JSON response to the client.
res.redirect(url): Redirects the client to a different URL.
res.setHeader(name, value): Sets an HTTP response header.
res.cookie(name, value, options): Sets a cookie in the response.

>> .listen - The .listen() method is commonly used in Node.js applications, especially when creating servers using frameworks like Express.js or native Node.js HTTP/HTTPS modules. This method is used to make the server start listening for incoming network connections on a specified port.




>>const {method,url}=req;
in this method = get,put,.....
in this url is nothing but the part that we want where which can choose which root for which one particular 
