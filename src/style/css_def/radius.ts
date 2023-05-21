const createRadius = (style: number) => {
    return `border-radius: ${style}px;`;
};

export const radius = {
    whole: createRadius(100),
    small: createRadius(5),
    middle: createRadius(10),
}