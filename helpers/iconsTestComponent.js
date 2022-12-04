const fs = require('fs')
const path = require('path')
const folderPath = '../src/icons'
const filename = '../src/components/TestIcons.js'

fs.writeFileSync(filename, '');

let subTemplate1 = ``
let subTemplate2 = ``
fs.readdirSync(folderPath).forEach( file => {
    const ext = path.extname(file)
    const bareName = path.basename(file, ext);
    subTemplate1 += `import ${bareName.replaceAll(' ','')} from '../icons/${file}';\n`
    subTemplate2 += `<img title='${bareName}' src={${bareName.replaceAll(' ','')}} />\n\t\t\t`
})
const template = `${subTemplate1}
    export default function TestIcons() {
    return (
        <div>
            ${subTemplate2}
        </div>)
    }

`
fs.appendFileSync(filename,template);
