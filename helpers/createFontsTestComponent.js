const fs = require('fs')
const path = require('path')
const folderPath = '../src/fonts'
const filename = '../src/components/TestFonts.js'
// const filename = '../'

fs.writeFileSync(filename, '');

let subTemplate1 = ``
let subTemplate2 = ``
fs.readdirSync(folderPath).forEach( file => {
    const ext = path.extname(file)
    const bareName = path.basename(file, ext);
    // subTemplate1 += `import ${bareName.replaceAll(' ','')} from '../fonts/${file}';\n`
    subTemplate2 += `<p style={{fontFamily:'${bareName}'}}>${bareName}</p>\n\t\t\t`
})
const template = `${subTemplate1}
    export default function TestFonts() {
    return (
        <div>
            ${subTemplate2}
        </div>)
    }

`
fs.appendFileSync(filename,template);
