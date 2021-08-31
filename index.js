const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.get("your-sneakerss.herokuapp.com/", function(req, res){
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log(`YourSneakers -> Online pape`);
});
