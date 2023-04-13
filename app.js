const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render('index');
})

app.get("/:pagename", (req, res) => {
  const pagename = req.params.pagename
  res.render('show', { content: pagename });
})

app.listen(port, () => {
  console.log(`The web server is running on localhost:${port}.`)
})