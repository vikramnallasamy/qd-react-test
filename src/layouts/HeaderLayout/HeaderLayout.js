import React from 'react'
import { LeftSection, RightSection, HeaderContainer } from './HeaderLayout.styled'
import Dazzie from '../../components/Dazzie/Dazzie'
import User from '../../components/User/User'

export default function HeaderLayout() {
  return (
    <>
        <LeftSection>
            <Dazzie name={"Daz"}/>
        </LeftSection>
        <RightSection>
            <User name={"Userrrrr"} role={"Cashier"} />
        </RightSection>
    </>
  )
}
