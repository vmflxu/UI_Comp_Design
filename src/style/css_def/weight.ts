const createWeight = (weight: number) => {
    return `font-weight: ${weight};`;
};

export const fw = {
    regular: createWeight(400),
    light: createWeight(300),
    semiBold: createWeight(600),
    bold: createWeight(700),
    heavyBold: createWeight(900),
}