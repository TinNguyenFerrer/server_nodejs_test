const handlebars= require('express-handlebars').engine;
const express = require('express')
const morgan = require('morgan');
const path = require('path');

const app = express()
const port = 3000

app.use(morgan('combined'))

// tample enggin
app.engine('hbs', handlebars({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
    res.render('news');
})

// console.log(_dirname)






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})