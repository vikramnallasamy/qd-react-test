import styled from 'styled-components'


export const LeftSection = styled.section `
    grid-area: headerleft;
    justify-content: left;

`
export const RightSection = styled.section `
    grid-area: headerright;
    justify-content: right;
`
export const HeaderContainer = styled.div `
    --header-padding: 1rem;
    display: grid;
    grid-template-areas: 'headerleft headerright';
    grid-template-columns: 1fr 1fr;
    padding: var(--header-padding);
    height: calc(100% - (var(--header-padding) * 2));
    background-color: ${({ theme }) => theme.color.white || 'white' }; 

    & > * {
        display: flex;
        align-items: center;
    }

`