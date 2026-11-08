const { readFile, readdir } = require('node:fs/promises');
const path = require('node:path');
const MarkdownIt = require('markdown-it');

const markdown = new MarkdownIt({ html: false });
const contentDir = path.join(__dirname, 'content');
const essayDir = path.join(contentDir, 'texte');

async function readPage(name) {
    const source = await readFile(path.join(contentDir, name + '.md'), 'utf8');
    return markdown.render(source);
}

async function readOptionalFile(file) {
    try {
        return await readFile(file, 'utf8');
    } catch (error) {
        if (error.code === 'ENOENT') return null;
        throw error;
    }
}

async function essayFiles() {
    let entries;
    try {
        entries = await readdir(essayDir, { withFileTypes: true });
    } catch (error) {
        if (error.code === 'ENOENT') return [];
        throw error;
    }
    return entries
        .filter(entry => entry.isFile() && !entry.name.startsWith('.') && entry.name.endsWith('.md'))
        .map(entry => entry.name)
        .sort((a, b) => a.localeCompare(b, 'de'));
}

async function readEssay(file) {
    const slug = path.basename(file, '.md');
    const source = await readOptionalFile(path.join(essayDir, file));
    if (source === null) return null;
    const env = {};
    const tokens = markdown.parse(source, env);
    const heading = tokens.findIndex(token => token.type === 'heading_open' && token.tag === 'h1');
    const paragraph = tokens.findIndex(token => token.type === 'paragraph_open' && token.level === 0);
    const title = heading < 0 ? slug : tokens[heading + 1].content || slug;
    const excerptHtml = paragraph < 0 ? '' :
        markdown.renderer.renderInline(tokens[paragraph + 1].children, markdown.options, env);

    return {
        title,
        url: '/texte/' + encodeURIComponent(slug),
        excerptHtml,
        bodyHtml: markdown.renderer.render(tokens, markdown.options, env)
    };
}

async function featuredEssay() {
    const files = await essayFiles();
    if (files.length === 0) return null;

    const name = await readOptionalFile(path.join(contentDir, 'empfehlung.txt'));
    const preferred = (name || '').trim() + '.md';
    return readEssay(files.includes(preferred) ? preferred : files[0]);
}

module.exports = { readPage, essayFiles, readEssay, featuredEssay };
