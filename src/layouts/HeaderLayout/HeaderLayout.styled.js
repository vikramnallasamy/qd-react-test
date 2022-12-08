import styled from 'styled-components'
import { flex, flexHLeft, flexHRight } from '../../libs/styledComponentLibs'


export const LeftSection = styled.section `
    grid-area: headerleft;
    height: 100%;
    ${flexHLeft()}
    gap: 1rem;

`
export const RightSection = styled.section `
    grid-area: headerright;
    height: 100%;
    ${flexHRight()}
    gap: 1rem;
`
export const HeaderContainer = styled.div `
    --header-padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 2rem);
    padding: var(--header-padding);
    background-color: ${({ theme }) => theme.color.white || 'white' }; 
    font-family: ${({ theme }) => theme.font.header || 'Mulish-Bold' }; 
`