### Instructions

1) Navigate to http://kortiz75.github.io/mobile-portfolio to open up the portfolio site
2) Click on "Cam's Pizzeria" to navigate to the pizza site
3) Open Chrome Dev Tools to measure the timeline for scrolling and pizza re-sizing

### Grunt building process

1) Install Node
2) Install Grunt in the project directory
3) Create a Gruntfile.js file and a package.json file in the project directory
4) Search for the Grunt tasks you want to use on your project
5) Install each task according to the provided documentation
6) Use the task documentation to code the Gruntfile.js file
7) Run Grunt in the terminal for the project's repository

### Optimizations to views/js/main.js

* Removed determinDx() function from changePizzaSizes()
* Moved repeating numbers from updatePositions() into an array, then iterated through the array
* Changed style.left to style.transform
* Lessened amount of pizzas from 200 to 24
* Moved pizzas into their own layer in views/css/style.css using will-change: transform
