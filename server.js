const express = require('express');

const PORT = 5000;

const app = express();


app.use(express.static('dist'));


app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

// eslint-disable-next-line no-unused-vars
const listener = app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
