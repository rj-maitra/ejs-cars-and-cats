const express = require('express'),
         port = 8000,
          app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/cars", (req, res) => {
    res.render("cars")
})

app.get("/cats", (req, res) => {
    res.render("cats")
})

app.get("/form", (req, res) => {
    res.render("form")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});