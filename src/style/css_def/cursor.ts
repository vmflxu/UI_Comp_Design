const createCursor = (style: string) => {
    return `cursor: ${style};`;
};


export const cursor = {
    default: createCursor("pointer"),
}