import styled from 'styled-components'


export const ContentContainer = styled.div `
    height: 100%;
    background-color: ${({ theme }) => theme.color.lightgrey || 'lightgrey'};
`