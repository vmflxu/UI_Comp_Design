import { styled } from "styled-components";

interface CustomStyle {
    css: string;
}

const NewBtn = styled.button<CustomStyle>`
    ${props => props.css};
`;

const NewSpan = styled.span<CustomStyle>`
    ${props => props.css};
`;

export const Custom = {
    Button: NewBtn,
    Span: NewSpan,
}