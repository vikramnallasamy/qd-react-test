const fs = require('fs')
const path = require('path')
const iconsFolder = '../src/icons'
const outputFolder = iconsFolder + '/ComponentSvg'
const outputFilExt = '.js'

const capitalize = (name) => {
    if(!name)
        return name
    return name[0].toUpperCase() + name.slice(1)
}
const formatName = (name) =>  {
    return name.replaceAll(/\s|(.svg)/g,'')
}

fs.readdirSync(iconsFolder).forEach( icon => {
    console.log(iconsFolder+'/'+icon)
    if(!path.extname(icon))
        return 
    const buffer = fs.readFileSync(iconsFolder+'/'+icon)
    const content = buffer.toString()
    const filename = capitalize(formatName(icon))
    const template = `export function ${filename}() {
        return (
            ${content}
        )
}`
    !fs.existsSync(outputFolder) && fs.mkdirSync(outputFolder)
    fs.writeFileSync(outputFolder+'/'+filename+outputFilExt, template)
})
