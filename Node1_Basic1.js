//--------------Basic knowledge Of Node-Js--------//
/* 1.What is Node-Js?
    -->Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to 
    execute JavaScript code server-side. It is built on the V8 JavaScript runtime engine, 
    which is the same engine used by the Google Chrome browser.
    
    2.Why we use Node-js?
      -->1.Node.js is used for server-side JavaScript development.
         2.It's popular for Making web servers, APIs,web application, and Mobile Application.
         

    3.History of Node-js?
    -->1. **Origins (2009):** Node.js was created by Ryan Dahl and initially released in 2009. Dahl aimed 
            to develop a scalable network application framework using JavaScript outside the browser.

        2. **Built on V8 Engine:** Node.js is built on the V8 JavaScript engine from Google Chrome, 
            known for its high-performance execution of JavaScript code.

        3. **Event-Driven Architecture:** Node.js introduced an event-driven, non-blocking I/O model,
           making it efficient for handling numerous concurrent connections.

        4. **npm (2010):** npm, the Node Package Manager, was introduced in 2010, facilitating the easy 
           installation, sharing, and management of packages and dependencies.

        5. **Widespread Adoption:** Node.js quickly gained popularity due to its speed, scalability, 
            and versatility. Many major companies and developers adopted it for building scalable 
            web applications.

        6. **Node.js Foundation (2015):** The Node.js Foundation was formed to oversee the project's 
           development, ensuring collaboration and support from various contributors and organizations.

        7. **Merger with io.js (2015):** Node.js and io.js, a fork of Node.js, merged in 2015,
           reconciling divergent development efforts and fostering a more unified ecosystem.
    
    4.Node-Js V/s JavaScript?
        -->Node.js and JavaScript (often abbreviated as "JS") are related but serve different purposes:
            1. **Node.js:**
            - **Runtime Environment:** Node.js is a runtime environment that allows you to run JavaScript code on the 
                server-side outside of a web browser.
            - **Server-Side Development:** It is primarily used for building server-side applications, web servers, 
                APIs, and other networked software.
            - **Access to APIs:** Node.js provides APIs for file system operations, networking, and other 
                server-related tasks.

            2. **JavaScript (JS):**
            - **Programming Language:** JavaScript is a high-level programming language that can be used for both 
                client-side and server-side scripting.
            - **Browser Execution:** In web development, JavaScript is commonly associated with client-side scripting, 
                executing in web browsers to enhance interactivity on websites.
            - **Standardized by ECMAScript:** JavaScript is standardized by the ECMAScript specification, ensuring 
                consistency across different implementations.
    
    5.what developers make with node js ?
       -->It's popular for Making web servers, APIs,web application, and Mobile Application.
    
    
    6.what is NPM?
    -->NPM stands for Node Package Manager, and it is the default package manager for Node.js. It is a 
    command-line tool and written in JavaScript and meant for Node.js development. NPM is used to manage 
    the process of integrating third-party libraries into your Node.js applications.

    Here are some common NPM commands:
- `npm install`: Installs project dependencies based on the `package.json` file.
- `npm install <package-name>`: Installs a specific package locally.
- `npm install -g <package-name>`: Installs a package globally.
- `npm init`: Initializes a new `package.json` file for your project.
- `npm publish`: Publishes a package to the NPM registry.
- `npm start`, `npm test`, `npm run <script>`: Executes scripts defined in the `package.json` file.

*/ 


//-----Import & Export----//
  import { x } from "./Node2_Basic2";//---> node js does not support the 
// import and export becouse node-js use older vertion of java-script.
// thats why we use--> const app = require("./app");
                    console.log(app);
                    console.log(app.z());

//-----Array----//
/*-----let arr=[1,2,3,4,5,6,7,8,9];
let result=arr.filter((value,index)=>{
    return index%2===1;
})
console.log(result);-----*/