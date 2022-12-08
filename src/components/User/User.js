import React from 'react'
import { useTheme } from 'styled-components';
import { renderIcon } from '../SideBar/SideBar';
import { UserCont, NotificationIcon, UserImageCont, UserName, UserRole } from './User.styled'

export default function User(props) {
    const theme = useTheme()
  return (
    <>
        <NotificationIcon>
            {renderIcon(theme.image.header.notificationBell)}
        </NotificationIcon>
        <UserImageCont />
        <UserCont>
            <UserName>{ props.name }</UserName>
            <UserRole>{ props.role }</UserRole>
        </UserCont>
    </>
  )
}
