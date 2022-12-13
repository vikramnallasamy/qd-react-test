import styled from 'styled-components'
import { flex, flexHCenter } from '../../libs/styledComponentLibs'

export const ProductsCont = styled.div `
    --pcont-border-radius: 8px;
    background: ${({ theme }) => theme.color.white || 'white' };
    margin: 2rem 1rem;
    padding: 1rem;
    border-radius: var(--pcont-border-radius);
    /* ${flexHCenter()} */
`
export const StyledInput = styled.input `
    width: calc(100% - 2rem);
    border: none;
    background: transparent;
    /* background: ${({ theme }) => theme.color.lightgrey || 'lightgrey'}; */
    height: 2.5rem;
    outline: none;
    `
export const SearchCont = styled.div `
    border-radius: var(--pcont-border-radius);
    background: ${({ theme }) => theme.color.lightgrey || 'lightgrey'};
    display: flex;
    justify-content: center;
    position: relative;
`
export const SearchIcon = styled.div `
    ${flex('center')}
    margin: 0 1rem;
    svg > * {
        fill: ${({ theme }) => theme.color.grey || 'grey' };
    }

`
export const CategoryItem = styled.div `
    padding: 1rem;
    flex: 1;
    cursor: pointer;
    max-width: 20%;
    margin-bottom: -4px;
    text-align: center;
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.font.productListCategoryMenu || "Mulish-Bold" };
    opacity: 0.4;
    /* color: ${({ theme }) => theme.color.grey || "grey" }; */
    border-bottom: var(--border-bottom) solid ${({ theme }) => theme.color.lightgrey || 'lightgrey' };
    &.active {
        opacity: 1;
        border-bottom: var(--border-bottom) solid ${({ theme }) => theme.color.blue || 'blue' };
    }
    `
export const CategoryCont = styled.div `
    --border-bottom: 4px;
    display: flex;
    flex-wrap: wrap;
    margin: 1rem -1rem;
    border-bottom: var(--border-bottom) solid ${({ theme }) => theme.color.lightgrey || 'lightgrey' };
`
export const ProductListCont = styled.div `
    margin: 2rem 0;
    font-family: ${({ theme }) => theme.font.productListHeading || "inherit" };
`
export const ProductListItem = styled.div `
    aspect-ratio: 16/9;
    min-width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.color.grey || "grey" };
    border-radius: var(--pcont-border-radius);
`
export const ProductImg = styled.div `
    flex: 1 1 90%;
    border-radius: var(--pcont-border-radius);
    background: ${({ theme }) => theme.color.grey || 'grey' };
`
export const ProductPrice = styled.div `
    height: 40px;
    display: flex;
    align-items: center;

`
export const ProductName = styled.div `
    height: 40px;
    display: flex;
    align-items: end;
`
export const ProductListItems = styled.div `
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    font-family: ${({ theme }) => theme.font.productListHeading || "inherit" };

    @media only screen and (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

