import styled from 'styled-components'
import { flex } from '../../libs/styledComponentLibs'


export const UserCont = styled.div.attrs({ className: 'UserCont'}) `
    font-family: ${({ theme }) => theme.font.userName || "Mulish-ExtraLight" };
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const UserName = styled.div `
    font-family: ${({ theme }) => theme.font.userName || "Mulish-ExtraLight" };
`
export const UserRole = styled.span `
    font-family: ${({ theme }) => theme.font.userRole || "Mulish-ExtraLight" };
    font-size: 0.75rem;
`
export const UserImageCont = styled.div `
    aspect-ratio: 1/1;
    background: ${({ theme }) => theme.color.grey || 'grey' };
    border-radius: 100%;
    height: 100%;

`
export const NotificationIcon = styled.div `
    ${flex('center')}
    svg > * {
        fill: ${({ theme }) => theme.color.grey || 'grey' };
    }
`