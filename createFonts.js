const fontsFolder = './src/fonts';
const fs = require('fs')
const path = require('path')
const filename = './src/fonts.scss'

fs.writeFileSync(filename, '');
fs.readdirSync(fontsFolder).forEach(file => {
    const ext = path.extname(file);
    const template = `@font-face {
        font-family: "${path.basename(file, ext)}";
        src: local("${file}"),
          url("./fonts/${file}") format("truetype");
    }\n`
    console.log(file);
    fs.appendFileSync(filename, template);
})