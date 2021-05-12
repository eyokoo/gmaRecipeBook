const express = require("express");
const bodyParser = require("body-parser"); //by default this app should be assuming request body data as json
const app = express();

app.use(bodyParser.json());
app.use(require("./routes/recipes")); //importing the routes module



const PORT = process.env.PORT || 9000
app.listen(port,() => {
  console.log("Listening to the port", port);
});
