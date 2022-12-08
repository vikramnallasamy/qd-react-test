import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarContainer } from './SideBarLayout.styled'
import { useTheme } from 'styled-components'


export default function SideBarLayout() {
    const theme = useTheme()
  return (
    <SideBarContainer>
        <SideBar icons={theme.image.SideBarIcons} />
    </SideBarContainer>
  )
}
