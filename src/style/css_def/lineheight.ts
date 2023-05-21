const createLineHeight = (height: number) => {
    return `line-height: ${height}px;`;
};

export const lh = {
    HEADING_1: createLineHeight(40),
    HEADING_2: createLineHeight(35),
    TITLE_1: createLineHeight(30),
    TITLE_2: createLineHeight(26),
    TITLE_3: createLineHeight(24),
    TITLE_4: createLineHeight(22),
    TITLE_5: createLineHeight(20),
    BODY_1: createLineHeight(22),
    BODY_2: createLineHeight(21),
    BODY_3: createLineHeight(20),
    BODY_4: createLineHeight(18),
    BODY_5: createLineHeight(16),
}