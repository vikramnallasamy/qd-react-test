import styled from 'styled-components'


export const ImgCont = styled.div `
    border-radius: 8px;
    background: ${({ theme }) => theme.color.grey }; 
    height: 100%;
    aspect-ratio: 1/1;

`

export const DazzieName = styled.span `
    text-align: center;
    font-family: ${({ theme }) => theme.font.dazzieName || "Mulish-ExtraBold" };
    font-size: 1.5rem;
`