const createBackground = (style: string) => {
    return `background-color: ${style};`;
};

export const bgColor = {
    gray: createBackground("gray"),
    black: createBackground("black"),
    white: createBackground("white"),
}