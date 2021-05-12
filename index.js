const express = require("express");
const bodyParser = require("body-parser"); //by default this app should be assuming request body data as json
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(require("./routes/recipes")); //importing the routes module




app.listen(port,() => {
  console.log("Listening to the port", port);
});
