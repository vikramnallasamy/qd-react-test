import React from 'react'
import { renderIcon } from '../../utils/renderIcon'
import { Icon, SideBarWrapper } from './SideBar.styled'


export default function SideBar(props) {
  return (
    <SideBarWrapper>
        {props.icons?.map( icon => {
            return <Icon to={icon.index ? '/' : icon.name} key={icon.name}>{renderIcon(icon)}</Icon>
        })}
    </SideBarWrapper>
  )
}
