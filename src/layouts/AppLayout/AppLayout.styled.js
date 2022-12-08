import styled from 'styled-components'
import * as styledLib from '../../libs/styledComponentLibs'

export const HeaderWrap = styled.div.attrs({ className: 'HeaderWrap'}) `
    grid-area: header;
    ${styledLib.flex('center')}

`
export const HeaderSection = styled.section.attrs({ className: 'header-section'})`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    grid-template-areas: 'headerleft headerright';
    width: 95%;
    height: 60%;
    gap: 1rem;
  `
export const SideBarSection = styled.section.attrs({ className: 'SideBarSection'}) `
  grid-area: sidebar;
  max-width: 200px;
  `
export const ContentSection = styled.section.attrs({ className: 'ContentSection'}) `
  grid-area: content;
  /* ${styledLib.flex('right')} */
  /* @include flexCenter(); */
  `
export const AppContainer = styled.div.attrs({ className: 'AppContainer' }) `
  display: grid;
  height: 100vh;
  grid-template-columns: minmax(50px,100px) minmax(300px, auto);
  grid-template-rows: minmax(60px,80px) auto;
  grid-template-areas: 'header header' 
                        'sidebar content'; 
  & > * {
    outline: 1px solid ${({ theme }) => theme.color.grey || 'grey'};
  }
  `
