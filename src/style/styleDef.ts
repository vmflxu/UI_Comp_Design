import { bgColor } from "./css_def/background";
import { border } from "./css_def/border";
import { cursor } from "./css_def/cursor";
import { hover } from "./css_def/hover";
import { radius } from "./css_def/radius";
import { size } from "./css_def/size";
import { textColor } from "./css_def/textColor";
import { fw } from "./css_def/weight";

const createStyle = (...styles: string[]) => {
    return styles.reduce((prev, curr) => {
        return prev + curr;
    });
};

export const btn = {
    default: createStyle(
        cursor.default,
        radius.whole,
        border.default,
        bgColor.gray,
        textColor.default,
        fw.bold,
        hover.btnDefault,
        size.btnLarge,
    ),
};