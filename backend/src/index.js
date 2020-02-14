const express = require('express');

const app = express();
const routes = express.Router();


routes.get('/', (req, res) => {
    res.send("asd");
})

app.use(routes);
app.listen(3333);