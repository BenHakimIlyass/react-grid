import styled, { css } from "@xstyled/styled-components";
import * as CSS from "csstype";

/**@author Ilyass Ben Hakim <ilyassbenhakim2@gmail.com> */

interface Metadata {
  key: string;
  value: CSS.Properties;
}
interface MetadataObj {
  [key: string]: Metadata;
}
type StyleProps = {
  [key: string]: CSS.Properties | MetadataObj;
};
type Props = {
  rows?: StyleProps;
  cols?: StyleProps;
  xgap?: StyleProps;
  ygap?: StyleProps;
  gap?: StyleProps;
  areas?: StyleProps;
  area?: StyleProps;
  rem?: boolean | undefined;
};

const handleUnit = (rem?: boolean): string => (rem ? "rem" : "px");
const withBreakpoints = (
  style?: StyleProps,
  styleName?: string,
  rem?: boolean
) => {
  //  Check the type of the style object
  if (
    (typeof style !== "object" &&
      typeof style !== "string" &&
      typeof style !== "number") ||
    typeof styleName !== "string"
  ) {
    return;
  } else if (typeof style === "object") {
    return css`
      ${Object.keys(style).map((objKey, _) => {
        //  Wrapp breakpoints
        return css`@media only screen and (min-width: ${[objKey]}px) {
        ${styleName}:${
          typeof style[objKey] === "number"
            ? style[objKey] + handleUnit(rem)
            : style[objKey]
        };
      }`;
      })}
    `;
  } else {
    // if the type of style is number, then we have to handle the unit (rem or px)
    if (typeof style === "number") {
      return css`
        ${styleName}: ${style + handleUnit(rem)};
      `;
    }
    //if no object detected we return the original style
    return css`
      ${styleName}: ${style};
    `;
  }
};
const Grid = styled.box<Props>`
  display: grid;
  ${({ rows }: Partial<Props>) => withBreakpoints(rows, "grid-template-rows")}
  ${({ cols }: Partial<Props>) =>
    withBreakpoints(cols, "grid-template-columns")}
  ${({ areas }: Partial<Props>) => withBreakpoints(areas, "grid-areas")}
  ${({ area }: Partial<Props>) => withBreakpoints(area, "grid-area")}
  ${({ ygap, rem }: Partial<Props>) =>
    withBreakpoints(ygap, "grid-column-gap", rem)}
  ${({ xgap, rem }: Partial<Props>) =>
    withBreakpoints(xgap, "grid-row-gap", rem)}
  ${({ gap, rem }: Partial<Props>) => withBreakpoints(gap, "grid-gap", rem)}
`;
export default Grid;
