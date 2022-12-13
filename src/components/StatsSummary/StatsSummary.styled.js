import styled from 'styled-components'
import { theme } from '../../themes/defaultTheme'


export const OrderSummaryCont = styled.div `
    display: grid;
    padding: 1rem;
    gap: 1rem;
    grid-template-columns: repeat( 4 , 1fr);
    @media only screen and (max-width: 900px) {
        grid-template-columns: repeat( 2 , 1fr);
    }
    @media only screen and (max-width: 640px) {
        grid-template-columns: repeat( 1 , 1fr);
    }
`
export const OrderSummary = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    border-radius: 6px;
    font-family: ${theme.font.MulishBold};
    background: ${({ theme }) => theme.color.white || "white" };
    padding: 1rem;
    > div:nth-child(2n) {
        text-align: right;
    }
    `

export const LatestOrderCont = styled.div `
    font-family: ${theme.font.MulishExtraBold};
    display: grid;
    gap: 1rem;
    margin: 1rem;
    grid-template-columns: 7fr 3fr;
    > div {
        background: ${({ theme }) => theme.color.white || "white" };  
        padding: 1rem;
    }
    @media only screen and (max-width: 980px) {
        grid-template-columns: 1fr;
        word-break: break-word;
    }
    
`

export const LatestOrderSection = styled.div `
    border-radius: var(--border-radius-common);
    table {
        width: 100%;
        text-align: left;
        margin: auto;
        border-spacing: 0;
        thead {
            background: ${theme.color.lightgrey};
        }
        tr {
            font-family: ${theme.font.MulishRegular};
            td,th {
                padding: 1rem;
                @media only screen and (max-width: 700px) {
                    padding: 0.5rem;
                }
            }
        }
        td,th {
            &:nth-child(3),&:nth-child(4),&:nth-child(5) {
                text-align: right;
            }
        }
    }
`

export const ItemsSoldImg = styled.div `
    width: 100%;
    aspect-ratio: 1/1;
    background: ${theme.color.lightgrey};
    border-radius: 6px;
`
export const ItemsSoldWrap = styled.div `
    border-top: 1px solid ${theme.color.lightgrey};
    overflow-y: auto;
    height: 50vh;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
    position: relative;
    --scrollbar-display: none;
    &:hover {
        /* --scrollbar-display: block; */
    }
    &::before, span {
        content: '';
        height: 100%;
        width: 5px;
        position: absolute;
        top: 0;
        right: 0;
        background: ${theme.color.grey};
        opacity: 0.4;
        display: var(--scrollbar-display);
    }
    span {
        height: 30px;
        opacity: 0.8;
        background: ${theme.color.blue};
    }
`
export const ItemsSoldSection = styled.div `
    border-radius: var(--border-radius-common);
    table {
        overflow-y: auto;
        width: 100%;
        text-align: left;
        margin: auto;
        border-spacing: 0;
        font-family: ${theme.font.MulishBold};

        tr {
            td {
                padding: 1rem 0;
                &:nth-child(2) {
                    padding: 1rem;
                }
                &:nth-child(3) {
                    text-align: right;
                    opacity: 0.4;
                }
                &:nth-child(1) {
                    width: 15%;
                    min-width: 60px;
                }
            }
        }
    }
`
export const StatsRateIcon = styled.div `
    --scale-icon: 0.5;
    svg {
        fill: none;
        transform: scale(var(--scale-icon));
        ${({ rate }) => {
            return rate > 0 ? `stroke: ${theme.color.rateIndicatorUp}; transform: scale(var(--scale-icon)) rotateX(180deg);` : `stroke: ${theme.color.rateIndicatorDown};`
        }}
        stroke-width: 3px;
    }
`
export const RateText = styled.div `
    ${({ rate }) => {
        return rate > 0 ? `color: ${theme.color.rateIndicatorUp};` : `color: ${theme.color.rateIndicatorDown};`
    }}
`