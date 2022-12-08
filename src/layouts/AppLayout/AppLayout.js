
import React from 'react'
import HeaderLayout from '../HeaderLayout/HeaderLayout';
import SideBarLayout from '../SideBarLayout/SideBarLayout';
import ContentLayout from '../ContentLayout/ContentLayout'
import { AppContainer, HeaderSection, HeaderWrap, SideBarSection, ContentSection } from './AppLayout.styled';

export default function AppLayout(props) {
  return (
        <AppContainer>
            <HeaderWrap>
                <HeaderSection>
                    <HeaderLayout/>
                </HeaderSection>
            </HeaderWrap>
            <SideBarSection>
                <SideBarLayout/>
            </SideBarSection>
            <ContentSection>
                <ContentLayout/>
            </ContentSection>
        </AppContainer>
  )
}
