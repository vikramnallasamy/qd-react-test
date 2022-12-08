import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { flex, flexCol } from '../../libs/styledComponentLibs'

export const SideBarWrapper = styled.div `
    --icon-padding: 1rem;
    padding-top: var(--icon-padding);
    margin-top: var(--icon-margin);
    ${flexCol('center')}
`

export const SideBarIcon = styled.div `
    padding: var(--icon-padding);
    margin: var(--icon-margin);
    background: ${({ theme }) => theme.color.blue || 'blue'};
`
export const SideBarIconSvg = styled.svg `

`
export const Icon = styled(NavLink) `
    margin: 0.5rem;
    border-radius: 8px;
    ${flex('center')}
    width: 50%;
    aspect-ratio: 1/1;
    svg > * {
        fill: ${({ theme }) => theme.color.grey || 'grey'};
    }
    &.active {
        background: ${({ theme }) => theme.color.blue || 'lightblue'};
        svg * {
            fill: ${({ theme }) => theme.color.white || 'whitee'};
            /* stroke: ${({ theme }) => theme.color.white || 'whitee'}; */
        }
    }
`