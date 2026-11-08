const express = require('express');
const path = require('node:path');
const { readPage, essayFiles, readEssay, featuredEssay } = require('./markdown');

const app = express();
const PORT = 3002;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    const [introHtml, featured] = await Promise.all([readPage('start'), featuredEssay()]);
    res.render('index', { title: 'Lucas Herrling', introHtml, featured });
});

app.get('/ueber', async (req, res) => {
    res.render('page', { title: 'Über', bodyHtml: await readPage('ueber') });
});

app.get('/texte', async (req, res) => {
    const files = await essayFiles();
    const essays = (await Promise.all(files.map(readEssay))).filter(Boolean);
    essays.sort((a, b) => a.title.localeCompare(b.title, 'de'));
    res.render('texte', { title: 'Texte', essays });
});

app.get('/texte/:slug', async (req, res) => {
    const file = req.params.slug + '.md';
    if (!(await essayFiles()).includes(file)) return res.sendStatus(404);

    const essay = await readEssay(file);
    if (!essay) return res.sendStatus(404);
    res.render('page', { title: essay.title, bodyHtml: essay.bodyHtml });
});

app.get('/kontakt', async (req, res) => {
    res.render('page', { title: 'Kontakt', bodyHtml: await readPage('kontakt') });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
