const express = require('express');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 5015;

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/user/:user', async (req, res) => {
    let {data} = await axios.get(`https://api.github.com/users/${req.params.user}`);
    res.send(data);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))