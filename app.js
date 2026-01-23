const express = require('express');
const app = express();
const path = require('path');
const PORT = 3002; // Internal port, not exposed to the public directly

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (css, images, js) from a 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.get('/ueber', (req, res) => {
    res.render('ueber', { title: 'About me' });
});

app.get('/texte', (req, res) => {
    res.render('texte', { title: 'Texte' });
});

app.get('/kontakt', (req, res) => {
    res.render('kontakt', { title: 'Kontakt' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});