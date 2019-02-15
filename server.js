//Server setting and start
var express = require("express");
var PORT = 8080;
var app = express();

function Log(message) {
    console.log(message)
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
Log("Hearts warming on http://localhost:" + PORT);
});
