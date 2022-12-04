
import React from 'react'
import HeaderLayout from '../HeaderLayout/HeaderLayout';
import SideBarLayout from '../SideBarLayout/SideBarLayout';
import ContentLayout from '../ContentLayout/ContentLayout'
import { AppContainer, HeaderSection, SideBarSection, ContentSection } from './AppLayout.styled';

export default function AppLayout() {
  return (
        <AppContainer>
            <HeaderSection>
                <HeaderLayout/>
            </HeaderSection>
            <SideBarSection>
                <SideBarLayout/>
            </SideBarSection>
            <ContentSection>
                <ContentLayout/>
            </ContentSection>
        </AppContainer>
  )
}
