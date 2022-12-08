import { css } from 'styled-components'


export function flex(align) {
    return css `
        display: flex;
        align-items: ${align};
        justify-content: ${align};
    `
}

export function flexCol(align) {
    return css `
        ${flex(align)}
        flex-direction: column;
    `
}
export function flexVcenter() {
    return css `
        display: flex;
        align-items: center;
    `
}
export function flexHCenter() {
    return css `
        display: flex;
        align-items: center;
    `
}
export function flexHLeft() {
    return css `
        ${flexVcenter()}
        justify-content: flex-start;
        `
    }
export function flexHRight() {
    return css `
    ${flexVcenter()}
    justify-content: flex-end;
`
}
export function flexVTop() {
    return css `
        ${flexHCenter()}
        align-items: flex-start;
    `
}
export function flexVBottom() {
    return css `
        ${flexHCenter()}
        align-items: flex-end;
    `
}
