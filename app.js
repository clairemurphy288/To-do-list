const express = require('express');
const app = express();
const date = require(__dirname + "/date.js");
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"))
let items = [];
let workItems = [];



//this sets up ejs
app.set('view engine', 'ejs');

app.get("/", function (req,res) {
    let day = date.getDate()

//recall that 'list' is expected to be in the views folder
    res.render('list', {listTitle: day, listItems: items});

});
app.post('/', function (req ,res) {
    console.log(req.body.button);
    if (req.body.button === "Work") {
        console.log("hi");
        let item = req.body.newItem;
        workItems.push(item);
        res.redirect('/work');
    } else {
        let item = req.body.newItem;
        items.push(item);
        res.redirect('/');
    }
    
});

app.get('/work', function(req,res) {
    res.render('list', {listTitle : "Work List", listItems : workItems})
});
app.post('/work', (req,res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
} );
app.get('/about', (req,res) => {
    res.render('about');
})
app.listen(3000, function () {
    console.log("Server is listening on port 3000");
})