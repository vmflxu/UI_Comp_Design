const createHover = (hoverStyle: string) => {
    return `&:hover { ${hoverStyle} };`;
};


export const hover = {
    btnDefault: createHover("color:white;background-color:black;"),
};