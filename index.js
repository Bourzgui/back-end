const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur Node.js !');
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
