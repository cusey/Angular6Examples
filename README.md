![CuseyHub](https://github.com/cusey/ImageForWiki/blob/master/Logos/CuseyHub_Banner_Small.jpg)

# Jersey National Bank 
Customers of the Jersey National Bank (JNB) can Pay Bills and Managing Payees

# Getting Started 

### Built With
* Angular 6
* NodeJS
* Microsoft Visual Studio Code   
* WebStorm:The Smart JavaScript IDE by JetBrains  

# Prerequisites
To run this project need to install the following items

### Git   
You can get git, go to [Git](https://git-scm.com/)   

### Node.js   
Angular requires Node.js version 8.x or 10.x.   

To check your version, run node -v in a terminal/console window.   

```
C:\Users\john_>node -v
v11.5.0
```
To get Node.js, go to [nodejs.org](https://nodejs.org).    

### Angular CLI   
Install the Angular CLI
You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.   

Install the Angular CLI globally.   

To install the CLI using npm, open a terminal/console window and enter the following command:   

```
npm install -g @angular/cli
```
### Creating New Project
```
$ng new project-name
```

# Run the Application

### Cloning GitHub  

First create folder called "workspace" then open the folder in Microsoft Visual Studio Code.  

Then open termial window and type the following commands.  

```
~/Desktop/workspace$git clone https://github.com/cusey/AngularExamples.git
```
### Starting server-json with [Fake REST API with JSON-Server](https://github.com/typicode/json-server)   
When you type the following command npm going to the package.json file. The this json file npm going in the scripts look see what commands to run.
Must be in the folder to run the following command. The json:server is script I configure in the package.json
```
$ cd C:\Users\john_\Desktop\workspace\AngularExamples\jsonserver
$ npm run json:server
```
Or run
```
$ C:\Users\john_\Desktop\workspace\AngularExamples\jsonserver
$ json-server --watch --port 3011 --routes routes.json db.json
```
When you successfully build you will see the following output.     
```

  \{^_^}/ hi!

  Loading db.json
  Loading routes.json
  Done

  Resources
  http://localhost:3011/person
  http://localhost:3011/account
  http://localhost:3011/account_types
  http://localhost:3011/answer
  http://localhost:3011/branch
  http://localhost:3011/credit_card
  http://localhost:3011/customer
  http://localhost:3011/login
  http://localhost:3011/questions
  http://localhost:3011/question_category
  http://localhost:3011/email
  http://localhost:3011/email_domin
  http://localhost:3011/phone_area_code
  http://localhost:3011/open_hours
  http://localhost:3011/phone
  http://localhost:3011/phone_employee
  http://localhost:3011/employee

  Other routes

  Home
  http://localhost:3011

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

### Login into the Webpage 

Must change the directories see below

```
~/Desktop/workspace$ cd AngularExamples/jersey-bank/
```

Now you have to pull down all to dependenies with npm the package manager. The list of dependenies are in the package.json file.        

```
~/Desktop/workspace/AngularExamples/jersey-bank$ npm install  
```

To build the project type the following command
```
~/Desktop/workspace/AngularExamples/jersey-bank$ ng serve
```

When you successfully build you will see the following output.   

```
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

Date: 2019-01-02T00:53:41.135Z
Hash: 253ecbbd50442f994326
Time: 9580ms
chunk {main} main.js, main.js.map (main) 10.8 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 227 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 5.22 kB [entry] [rendered]
chunk {scripts} scripts.js, scripts.js.map (scripts) 158 kB  [rendered]
chunk {styles} styles.js, styles.js.map (styles) 147 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.29 MB [initial] [rendered]
i ｢wdm｣: Compiled successfully.
```



# Compile code in models (Hard Code Database)
If use the use the [Fake REST API with JSON-Server](https://github.com/typicode/json-server) database you do not need to code hard the database.     
    
Create a TypeScript Configuration File     
```
~/Desktop/workspace/AngularExamples/jersey-bank/src/models$ tsc -init
message TS6071: Successfully created a tsconfig.json file.
```
Continuous transcompile TypeScript to JavaScript     
```
~/Desktop/workspace/AngularExamples/jersey-bank/src/models$ tsc -w
````

Run main JavaScript Code

```
~/Desktop/workspace/AngularExamples/jersey-bank/src/models$ Node main
```

# Developer Tools   
* Microsoft Visual Studio Code 
* IntelliJ IDEA Webstorm 

## Authors
* John Cusey - CuseyHub  

## License   
This project is licensed under the MIT License





