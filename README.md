# design-portfolio

# How to start the server in developer mode?

1. Get the latest changes with the <b>'git pull'</b> command or clone the repository with the <b>'git clone https://github.com/fkalo/design-portfolio.git'</b> command
2. Navigate to the root folder of the project and run the <b>'npm run serverstart'</b> command
3. Open the <b>'http://localhost:3000'</b>
4. Enjoy!

# How to add new page to the projcet?

In this example we would like to create a new page which will be available at the 'http://localhost/dwarfdogs' 🐕 url.

1. Create a new view for the page in <b>./views</b> folder. The extension of the file must be <b>.mustache</b>. Don't worry it is a simple html-based syntax which is used for the express-mustach dynamic html generation. You can use the usual html syntax.

```
./views/dwarfdogs.mustache
```

```html
<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <p>I like dwarf dogs!</p>
  </body>
</html>
```

2. Create a router file in the <b>./routes</b> folder.

```
./routes/dwarfdogs.js
```

```js
var express = require("express");
var router = express.Router();

/* GET dwarfdogs page. */
router.get("/", function (req, res, next) {
  res.render("dwarfdogs"); // ==> THE NAME OF THE VIEW WITHOUT THE .MUSTACHE EXTENSION!
});

module.exports = router;
```

4. Set up the url routing of the view in the <b>app.js</b> file

```
/app.js
```

```js
// 1. Import the router file in the app.js where the 'IMPORT ROUTERS:' note is placed:
var dwarfdogsRouter = require("./routes/dwarfdogs");
//2. Set up the url - view mapping in the app.js file where the 'PAGE ROUTING:" note is placed:
app.use("/dwarfdogs", dwarfdogsRouter);
```

5. Open the 'http://localhost/dwarfdogs' url
6. Enjoy the dankest dwarf dogs! 🤗
