import parseHtml from 'html-react-parser'

export const renderIcon = (icon) => {
    if(icon.isSvg)
        return parseHtml(icon.src)
    return <img alt={icon.name} src={icon.src} />
}
