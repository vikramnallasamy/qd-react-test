import React from 'react'
import parseHtml from 'html-react-parser'
import { Icon, SideBarWrapper } from './SideBar.styled'

export const renderIcon = (icon) => {
    if(icon.isSvg)
        return parseHtml(icon.src)
    return <img alt={icon.name} src={icon.src} />
}

export default function SideBar(props) {
  return (
    <SideBarWrapper>
        {props.icons?.map( icon => {
            return <Icon to={icon.name} key={icon.name}>{renderIcon(icon)}</Icon>
        })}
    </SideBarWrapper>
  )
}
