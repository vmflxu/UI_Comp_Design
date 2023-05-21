const createBorder = (style: string) => {
    return `border: ${style};`;
};

export const border = {
    default: createBorder("1px solid gray"),
}