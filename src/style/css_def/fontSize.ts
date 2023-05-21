const createFontSize = (size: number) => {
    return `font-size: ${size}px;`;
};

export const fs = {
    HEADING_1: createFontSize(32),
    HEADING_2: createFontSize(28),
    TITLE_1: createFontSize(24),
    TITLE_2: createFontSize(20),
    TITLE_3: createFontSize(18),
    TITLE_4: createFontSize(16),
    TITLE_5: createFontSize(14),
    BODY_1: createFontSize(16),
    BODY_2: createFontSize(15),
    BODY_3: createFontSize(14),
    BODY_4: createFontSize(13),
    BODY_5: createFontSize(12),
}