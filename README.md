# vulnerable-app & attacker-app
There are two applications within this repository that were generated from the HotTowel Angular generator. The main one is the `vulnerable-app` which is found in the `/src` folder. This application was built intentionally built out with vulnerabilities to easily demonstrate how they are performed by an attacker. The secondary application is the `attacker-app` found in the `/attacker-app` folder and it was built out to assist in demonstrating an attacker's website that is exploiting the vulnerabilities in the `vulnerable-app`.

## How to Run Both Apps
1. Open your terminal and `cd` to the root folder for this repository
2. Run `gulp serve-dev` to spin up the `vulnerable-app`
3. You should see your browser open up a new tab to the following URL: [http://localhost:3000](http://localhost:3000)
4. Open a new terminal window or tab and `cd` to the `/attacker-app` folder from the root location of this repository
5. Run `gulp serve-dev`
6. You should see your browser open up another new tab to the following URL: [http://localhost:3002](http://localhost:3002)

## How to Test

### XSS
The following steps will demonstrate a simple example of being able to escape the context of where the search input text is printed on screen and used to execute an injectable script that the browser will execute.

1. In the tab that's running the `vulnerable-app`, click on the option `XSS-Search` in the navigation bar
2. In the "Search" field enter the following text: `<script>alert('Malicious Script!');</script>`
3. Click the "Submit" button
4. You should see an alert message pop up on your screen with the message "Malicious Script!"

### CSRF
The following steps will demonstrate a simple example of being able to submit requests on behalf of the logged in user within the vulnerable-app, but executed from the `attacker-app`.

1. In the tab that's running the `vulnerable-app`, click on the option `CSRF` in the navigation bar and take note of the "User Profile" section within the view
    > By default, the user's "First Name" should show the value of `Jim` and the "Last Name" as the value of `Bob`

2. In the tab that's running the `attacker-app`, click on the option `CSRF-Attack` in the navigation bar. This will immediately execute the CSRF attack and display the forged POST data
3. Go back to the tab that's running the `vulnerable-app` and make sure you're still in the `CSRF` view
4. Click the "Get Latest User Profile" button and you should see that the user's profile was changed due to the CSRF attack

    > The user's "First Name" should show the value of `Evil` and the "Last Name" as the value of `Hacker` now

### Clickjacking
The following steps will demonstrate a simple example of clickjacking by tricking the user of the `vulnerable-app` to click a seemingly harmless button in the `attacker-app` that actually executes an action in the `vulnerable-app`.

1. In the tab that's running the `attacker-app`, click on the option `Clickjacking-Attack`
    > You should be able to see that the `vulnerable-app` is loaded in the view, but with a low opacity

2. Open the developer tools for the browser you're using and view the console
3. Click the "Click to see awesome dog backflips!" button

    > You should see a message in the console with the following text: "The profile was successfully deleted!"

This example demonstrates that while the user thinks they're clicking on a button that will show them "awesome dog backflips", they're actually clicking on the "Delete Sensitive Information!" button found in the `vulnerable-app`. This is accomplished because the `attacker-app` can load the `vulnerable-app` in an `iframe` html element, style the iframe so it's not visible at all (in this case it is somewhat visible for demonstration purposes) and actually a "layer" deep from other html elements within the view, and place "clickbait" type elements on top of the iframe and over the areas the attacker wants the user to click within the iframe instead.

## References/Further Reading
1. [OWASP](https://www.owasp.org/)
    1. [Cross-site Scripting Defense Cheat Sheet][1]
    1. [Cross-site Request Forgery Defense Cheat Sheet][2]
    1. [Clickjacking Defense Cheat Sheet](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet)
2. [HTML5Rocks - CSP](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
3. [Angular $sanitize](https://docs.angularjs.org/api/ngSanitize/service/$sanitize)
4. [Angular $sce](https://docs.angularjs.org/api/ng/service/$sce)
5. [xss-filters](https://www.npmjs.com/package/xss-filters)
6. [lusca](https://www.npmjs.com/package/lusca)

[1]: https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet
[2]: https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet

-------

**Generated from HotTowel Angular**

>*Opinionated Angular style guide for teams by [@john_papa](//twitter.com/john_papa)*

>More details about the styles and patterns used in this app can be found in my [Angular Style Guide](https://github.com/johnpapa/angularjs-styleguide) and my [Angular Patterns: Clean Code](http://jpapa.me/ngclean) course at [Pluralsight](http://pluralsight.com/training/Authors/Details/john-papa) and working in teams.

## Prerequisites

1. Install [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install Yeoman `npm install -g yo`

3. Install these NPM packages globally

    ```bash
    npm install -g bower gulp nodemon
    ```

    >Refer to these [instructions on how to not require sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)

## Running HotTowel

### Linting
 - Run code analysis using `gulp vet`. This runs jshint, jscs, and plato.

### Tests
 - Run the unit tests using `gulp test` (via karma, mocha, sinon).

### Running in dev mode
 - Run the project with `gulp serve-dev`

 - opens it in a browser and updates the browser with any files changes.

### Building the project
 - Build the optimized project using `gulp build`
 - This create the optimized code for the project and puts it in the build folder

### Running the optimized code
 - Run the optimize project from the build folder with `gulp serve-build`

## Exploring HotTowel
HotTowel Angular starter project

### Structure
The structure also contains a gulpfile.js and a server folder. The server is there just so we can serve the app using node. Feel free to use any server you wish.

	/src
		/client
			/app
			/content

### Installing Packages
When you generate the project it should run these commands, but if you notice missing packages, run these again:

 - `npm install`
 - `bower install`

### The Modules
The app has 4 feature modules and depends on a series of external modules and custom but cross-app modules

```
app --> [
        app.admin --> [
            app.core,
            app.widgets
        ],
        app.dashboard --> [
            app.core,
            app.widgets
        ],
        app.layout --> [
            app.core
        ],
        app.widgets,
		app.core --> [
			ngAnimate,
			ngSanitize,
			ui.router,
			blocks.exception,
			blocks.logger,
			blocks.router
		]
    ]
```

#### core Module
Core modules are ones that are shared throughout the entire application and may be customized for the specific application. Example might be common data services.

This is an aggregator of modules that the application will need. The `core` module takes the blocks, common, and Angular sub-modules as dependencies.

#### blocks Modules
Block modules are reusable blocks of code that can be used across projects simply by including them as dependencies.

##### blocks.logger Module
The `blocks.logger` module handles logging across the Angular app.

##### blocks.exception Module
The `blocks.exception` module handles exceptions across the Angular app.

It depends on the `blocks.logger` module, because the implementation logs the exceptions.

##### blocks.router Module
The `blocks.router` module contains a routing helper module that assists in adding routes to the $routeProvider.

## Gulp Tasks

### Task Listing

- `gulp help`

    Displays all of the available gulp tasks.

### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.

- `gulp plato`

    Performs code analysis using plato on all javascript files. Plato generates a report in the reports folder.

### Testing

- `gulp serve-specs`

    Serves and browses to the spec runner html page and runs the unit tests in it. Injects any changes on the fly and re runs the tests. Quick and easy view of tests as an alternative to terminal via `gulp test`.

- `gulp test`

    Runs all unit tests using karma runner, mocha, chai and sinon with phantomjs. Depends on vet task, for code analysis.

- `gulp test --startServers`

    Runs all unit tests and midway tests. Cranks up a second node process to run a server for the midway tests to hit a web api.

- `gulp autotest`

    Runs a watch to run all unit tests.

- `gulp autotest --startServers`

    Runs a watch to run all unit tests and midway tests. Cranks up a second node process to run a server for the midway tests to hit a web api.

### Cleaning Up

- `gulp clean`

    Remove all files from the build and temp folders

- `gulp clean-images`

    Remove all images from the build folder

- `gulp clean-code`

    Remove all javascript and html from the build folder

- `gulp clean-fonts`

    Remove all fonts from the build folder

- `gulp clean-styles`

    Remove all styles from the build folder

### Fonts and Images

- `gulp fonts`

    Copy all fonts from source to the build folder

- `gulp images`

    Copy all images from source to the build folder

### Styles

- `gulp styles`

    Compile less files to CSS, add vendor prefixes, and copy to the build folder

### Bower Files

- `gulp wiredep`

    Looks up all bower components' main files and JavaScript source code, then adds them to the `index.html`.

    The `.bowerrc` file also runs this as a postinstall task whenever `bower install` is run.

### Angular HTML Templates

- `gulp templatecache`

    Create an Angular module that adds all HTML templates to Angular's $templateCache. This pre-fetches all HTML templates saving XHR calls for the HTML.

- `gulp templatecache --verbose`

    Displays all files affected by the task.

### Serving Development Code

- `gulp serve-dev`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles less to css in a temp folder.

- `gulp serve-dev --nosync`

    Serves the development code without launching the browser.

- `gulp serve-dev --debug`

    Launch debugger with node-inspector.

- `gulp serve-dev --debug-brk`

    Launch debugger and break on 1st line with node-inspector.

### Building Production Code

- `gulp optimize`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

- `gulp build`

    Copies all fonts, copies images and runs `gulp optimize` to build the production code to the build folder.

### Serving Production Code

- `gulp serve-build`

    Serve the optimized code from the build folder and launch it in a browser.

- `gulp serve-build --nosync`

    Serve the optimized code from the build folder and manually launch the browser.

- `gulp serve-build --debug`

    Launch debugger with node-inspector.

- `gulp serve-build --debug-brk`

    Launch debugger and break on 1st line with node-inspector.

### Bumping Versions

- `gulp bump`

    Bump the minor version using semver.
    --type=patch // default
    --type=minor
    --type=major
    --type=pre
    --ver=1.2.3 // specific version

## License

MIT
