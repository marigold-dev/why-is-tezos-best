const MarkdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownHSections = require('markdown-it-header-sections');
const fs = require('fs');
const MD = new MarkdownIt({ html: true });
MD.use(markdownItAttrs)
    .use(markdownHSections);
const md = fs.readFileSync('./src/index.md', { encoding: 'utf8' });
const body = MD.render(md);


const template = fs.readFileSync('./src/template.html', { encoding: 'utf8' });
const html = template.replace('{body}', body);
fs.writeFileSync('./www/index.html', html);