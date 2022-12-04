

import React from 'react'
import { LeftSection, RightSection, HeaderContainer } from './HeaderLayout.styled'

export default function HeaderLayout() {
  return (
    <HeaderContainer>
        <LeftSection>Left Section</LeftSection>
        <RightSection>Right Section</RightSection>
    </HeaderContainer>
  )
}
