const express = require('express');
const app = express();
const port = 8080;

app.get('/secret-image/', (req, res) => {
  res.send(`<h1>Welcome to capybaraTalk!</h1><img src="https://railsware.com/blog/wp-content/uploads/2012/01/Capybara-with-Given.png"/>`)
});

app.get('/*', (req, res) => {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  str = `The server hour is ${hour}:${minute}:${seconds}`;
  return res.json(str);
});

app.listen(port, () => {
  console.log(`[Rodando na porta ${port}] ...`)
});
