import { fs } from "../css_def/fontSize";
import { lh } from "../css_def/lineheight";
import { fw } from "../css_def/weight";

const getColor = (text: string) => {
    return `#${text}`;
};

const getTypo = (fw: string, fs: string, lh: string) => {
    return `${fw + fs + lh}`;
};

export const color = {
    TEXT_STRONG: getColor('191919'),
    TEXT_STRONG_MEDIUM: getColor('2E3338'),
    TEXT_MEDIUM: getColor('717176'),
    TEXT_LIGHT: getColor('A1A1AC'),
    PRIMARY01: getColor('010101'),
    PRIMARY02: getColor('B81B1B'),
    BG_MEDIUM: getColor('F1F1F5'),
    BG_LIGHT: getColor('F8F8FA'),
    LINE_STRONG: getColor('909096'),
    LINE_MEDIUM: getColor('DBDBDB'),
    LINE_LIGHT: getColor('EDEDED'),
    BLACK: getColor('black'),
    WHITE: getColor('white'),
    RED: getColor('F04335'),
    BLUE: getColor('427AF5'),
};


export const typo = {
    HEADING_1: getTypo(fw.bold, fs.HEADING_1, lh.HEADING_1),
    HEADING_2: getTypo(fw.bold, fs.HEADING_2, lh.HEADING_2),
    TITLE_1: getTypo(fw.semiBold, fs.TITLE_1, lh.TITLE_1),
    TITLE_2: getTypo(fw.semiBold, fs.TITLE_2, lh.TITLE_2),
    TITLE_3: getTypo(fw.semiBold, fs.TITLE_3, lh.TITLE_3),
    TITLE_4: getTypo(fw.semiBold, fs.TITLE_4, lh.TITLE_4),
    TITLE_5: getTypo(fw.semiBold, fs.TITLE_5, lh.TITLE_5),
    BODY_1: getTypo(fw.regular, fs.BODY_1, lh.BODY_1),
    BODY_2: getTypo(fw.regular, fs.BODY_2, lh.BODY_2),
    BODY_3: getTypo(fw.regular, fs.BODY_3, lh.BODY_3),
    BODY_4: getTypo(fw.regular, fs.BODY_4, lh.BODY_4),
    BODY_5: getTypo(fw.regular, fs.BODY_5, lh.BODY_5),
};