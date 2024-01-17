/* 1.what are core modules in nodejs?
    -->In Node.js, core modules are pre-built modules that come bundled with the Node.js installation. 
    These modules provide essential functionalities for developers to use in their applications without 
    requiring additional installation. Some core modules include:

    1. **HTTP Module:** Allows you to create an HTTP server and make HTTP requests. Useful for building 
    web servers or making API calls.

    2. **FS (File System) Module:** Provides functions to work with the file system, allowing you to read 
        from and write to files.

    3. **Path Module:** Helps in working with file and directory paths, making it easier to 
    navigate and manipulate file paths.

    4. **OS (Operating System) Module:** Provides information about the operating system, such as 
    CPU architecture and free memory.

    5. **Events Module:** Enables the implementation of the event-driven architecture in Node.js, 
    allowing objects to emit and listen for events.

    6. **Util Module:** Provides utility functions for formatting and printing messages, among other things.

    7. **Crypto Module:** Offers cryptographic functionalities, including hash functions and encryption/decryption.

    8. **Net Module:** Allows you to create TCP servers and clients, facilitating network communication.

    9. **URL Module:** Helps in parsing and formatting URL strings.

    10. **Querystring Module:** Provides functions to work with URL query strings, handling encoding and decoding.

     */
    
    
    /*2.what are the global objects?
        -->In Node.js, several objects are considered global because they are available globally in any module or 
           script without the need for explicit importing or requiring. Some of the key global objects in Node.js include:
        
        
        1. **Global:** The `global` object represents the global namespace. Variables declared without the `var`, `let`, or `const` 
             keyword become properties of the global object.

            ```Ex:-
            global.myVariable = 'I am global!';
            console.log(myVariable); // Outputs: I am global!
            ```

            2. **Process:** The `process` object provides information about, and control over, the current Node.js process. 
               It includes properties and methods for interacting with the environment and the process itself.

            ```Ex:-
            console.log(process.cwd()); // Outputs the current working directory
            ```

            3. **Console:** The `console` object provides methods for printing messages to the console, 
               facilitating debugging and logging.

            ```EX:-
            console.log('This is a log message.');
            console.error('This is an error message.');
            ```

            4. **Buffer:** The `Buffer` class is a global object used to handle binary data directly. It is particularly 
                useful when working with file system operations, networking, and other low-level operations.

            ```EX:-
            const buffer = Buffer.from('Hello, World!', 'utf-8');
            console.log(buffer.toString()); // Outputs: Hello, World!
            ```
    */

/* 3.what are the non global objects?
   --->Non-global objects in Node.js are typically specific to certain modules or contexts and need to be 
      explicitly imported or required to be used in a script. Here are some examples of non-global objects:

        1. **Module Object:** Each Node.js module has its own `module` object that provides information about 
        the current module and allows the module to export functionalities to other modules.

        ```EX:-
        // In a module, you can access the module object
        console.log(module.filename);
        ```

        2. **Require Function:** The `require` function is used to import external modules into your Node.
           js application. It returns the exports of the required module.

        ```EX:-
        const fs = require('fs');
        ```

        3. **Exports Object:** The `exports` object is used to define what should be exported from a module. 
          It allows you to expose functions, variables, or objects to other modules.

        ```EX:-
        // In a module, you can use exports to expose functionality
        exports.myFunction = () => {
        // code here
        };
        ```

        4. **Process Arguments (process.argv):** The `process.argv` array contains command-line arguments 
         passed to the Node.js process.

        ```EX:-
        // Access command line arguments
        console.log(process.argv);
        ```

        5. **Console Object (Local):** While `console` was mentioned as a global object, it can also be 
          considered a non-global object when used locally within a module or function.

        ```EX:-
        // In a module, console is local
        function myFunction() {
        console.log('This is a local console log.');
        }
        ```

        6. **EventEmitter Class:** The `EventEmitter` class from the `events` module allows objects to 
          emit and listen for events. Instances of this class need to be created for event handling.

        ```EX:-
        const EventEmitter = require('events');
        const myEmitter = new EventEmitter();
 */


console.log("Hellooo");//--> we does not import it so it is global modules..
console.log("Directory Name-->",__dirname);//-->for cheak the directory...
console.log("Directory Name-->",__filename);//--->for cheak the filename...

//--creat file--//

// const fs=require('fs');//-->here we import the fs function so it is a non-global modules..
// fs.writeFileSync("creat_server.js","");//-->creat file..
//           or
// const fs=require('fs').writeFileSync;
// fs("creat_server.js","");