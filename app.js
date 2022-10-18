var express = require("express");
const { default: mongoose } = require("mongoose");
var path = require("path");
var bodyParser = require('body-parser')

//Initialize app
var app = express();

//Connect to DB
mongoose.connect("mongodb+srv://mosope-owolabi:vijodebe@cluster0.ztygibj.mongodb.net/shopping_cart?retryWrites=true&w=majority" , { useNewUrlParser: true, useUnifiedTopology: true });
console.log(mongoose.connection.readyState);
//Veiws Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Set Public Folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Eternal Life!");
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Set Routes
var pages = require("./routes/pages");
var adminPages = require("./routes/admin_pages");

app.use("/pages", pages);
app.use("/admin-pages", adminPages);

//Start Server
var port = 3000;
app.listen(port, () => {
    console.log(`Server listening at port ${port}...`);
})