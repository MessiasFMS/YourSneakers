const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`YourSneakers -> Online pape`);
});
