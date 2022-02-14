const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', function(req,res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.send({ express: 'Hello From Express' });
  if (req.protocol == 'http') {
    res.redirect('https://' +
    req.get('host') + req.originalUrl);
}
});


const PORT = 5000 || process.env.port;
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}...`));